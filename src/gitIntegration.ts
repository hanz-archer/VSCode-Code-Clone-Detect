import simpleGit from 'simple-git';
import * as vscode from 'vscode';

const git = simpleGit();

export async function integrateGit(){
    const status = await git.status();
    vscode.window.showInformationMessage('Gitt status fetched');
}