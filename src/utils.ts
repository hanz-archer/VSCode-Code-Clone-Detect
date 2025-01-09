import * as fs from 'fs';

export function readFile(filePath: string): string {
    return fs.readFileSync(filePath, 'utf-8');
}
