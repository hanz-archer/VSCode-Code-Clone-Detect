import * as vscode from 'vscode';
import { detectCodeClones } from './cloneDetection';
import { highlightDuplicates } from './highlight';
import { integrateGit } from './gitIntegration';

export function activate(context: vscode.ExtensionContext) {
    const cloneCommand = vscode.commands.registerCommand('extension.detectClones', async () => {
        const files = await vscode.workspace.findFiles('**/*.ts');
        const clones = detectCodeClones(files);
        highlightDuplicates(clones);
    });

	context.subscriptions.push(cloneCommand);
}

export function deactivate (){}