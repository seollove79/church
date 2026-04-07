import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const FILE_PATH = 'src/lib/data/sermons.json';

// GitHub API를 통해 파일 읽기
async function readFromGitHub() {
	const res = await fetch(
		`https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${FILE_PATH}`,
		{
			headers: {
				Authorization: `token ${env.GITHUB_TOKEN}`,
				Accept: 'application/vnd.github.v3+json'
			}
		}
	);
	if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
	const file = await res.json();
	return {
		data: JSON.parse(Buffer.from(file.content, 'base64').toString('utf-8')),
		sha: file.sha
	};
}

// GitHub API를 통해 파일 커밋
async function writeToGitHub(data, sha) {
	const content = Buffer.from(JSON.stringify(data, null, '\t') + '\n', 'utf-8').toString('base64');
	const res = await fetch(
		`https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${FILE_PATH}`,
		{
			method: 'PUT',
			headers: {
				Authorization: `token ${env.GITHUB_TOKEN}`,
				Accept: 'application/vnd.github.v3+json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				message: '설교 정보 업데이트',
				content,
				sha,
				branch: env.GITHUB_BRANCH || 'main'
			})
		}
	);
	if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
}

export async function GET() {
	try {
		if (env.GITHUB_TOKEN) {
			// Vercel 배포 환경: GitHub API로 읽기
			const { data } = await readFromGitHub();
			return json(data);
		} else {
			// 로컬 개발 환경: 파일 직접 읽기
			const dataPath = join(process.cwd(), FILE_PATH);
			const data = JSON.parse(readFileSync(dataPath, 'utf-8'));
			return json(data);
		}
	} catch {
		return json({ error: '데이터를 불러올 수 없습니다.' }, { status: 500 });
	}
}

export async function POST({ request }) {
	try {
		const body = await request.json();
		const { title, meta, videoUrl } = body;

		if (!title || !meta || !videoUrl) {
			return json({ error: '모든 항목을 입력해주세요.' }, { status: 400 });
		}

		const data = { title, meta, videoUrl };

		if (env.GITHUB_TOKEN) {
			// Vercel 배포 환경: GitHub API로 커밋
			const { sha } = await readFromGitHub();
			await writeToGitHub(data, sha);
		} else {
			// 로컬 개발 환경: 파일 직접 쓰기
			const dataPath = join(process.cwd(), FILE_PATH);
			writeFileSync(dataPath, JSON.stringify(data, null, '\t') + '\n', 'utf-8');
		}

		return json({ success: true });
	} catch {
		return json({ error: '저장에 실패했습니다.' }, { status: 500 });
	}
}
