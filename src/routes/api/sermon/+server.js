import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { json } from '@sveltejs/kit';

const dataPath = join(process.cwd(), 'src/lib/data/sermons.json');

export function GET() {
	try {
		const data = JSON.parse(readFileSync(dataPath, 'utf-8'));
		return json(data);
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
		writeFileSync(dataPath, JSON.stringify(data, null, '\t'), 'utf-8');
		return json({ success: true });
	} catch {
		return json({ error: '저장에 실패했습니다.' }, { status: 500 });
	}
}
