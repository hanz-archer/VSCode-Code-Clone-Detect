import * as vscode from 'vscode';

export function createRefactorAction(): vscode.CodeAction {
    const action = new vscode.CodeAction('Extract to Function', vscode.CodeActionKind.Refactor);
    action.command = {
        command: 'extension.extractToFunction',
        title: 'Extract to Function',
        arguments: [/* Arguments to pass for refactoring */]
    };
    return action;
}
