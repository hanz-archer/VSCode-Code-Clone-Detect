import * as vscode from 'vscode';
import * as fs from 'fs';

export function detectCodeClones(files: vscode.Uri[]): vscode.Range[] {
    const seen = new Set<string>();
    const clones: vscode.Range[] = [];

    files.forEach(file => {
        const code = fs.readFileSync(file.fsPath, 'utf-8');
        if (seen.has(code)) {
            clones.push(new vscode.Range(
                new vscode.Position(0, 0),
                new vscode.Position(code.split('\n').length, 0)
            ));
        }
        seen.add(code);
    });
    return clones;
}