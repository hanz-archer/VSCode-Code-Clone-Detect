import * as vscode from 'vscode'

export function highlightDuplicates(duplicates: vscode.Range[]){
    const decorationType = vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 0, 0,0.3)',
        isWholeLine: true
    });

    vscode.window.activeTextEditor?.setDecorations(decorationType, duplicates);
}