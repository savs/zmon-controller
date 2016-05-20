/// <reference path="../../../../public/app/headers/common.d.ts" />
import { Emitter } from 'app/core/core';
export declare class PanelCtrl {
    panel: any;
    row: any;
    dashboard: any;
    editorTabIndex: number;
    pluginName: string;
    pluginId: string;
    editorTabs: any;
    $scope: any;
    $injector: any;
    $timeout: any;
    fullscreen: boolean;
    inspector: any;
    editModeInitiated: boolean;
    editorHelpIndex: number;
    editMode: any;
    height: any;
    containerHeight: any;
    events: Emitter;
    constructor($scope: any, $injector: any);
    init(): void;
    renderingCompleted(): void;
    refresh(): void;
    publishAppEvent(evtName: any, evt: any): void;
    changeView(fullscreen: any, edit: any): void;
    viewPanel(): void;
    editPanel(): void;
    exitFullscreen(): void;
    initEditMode(): void;
    addEditorTab(title: any, directiveFn: any, index?: any): void;
    getMenu(): any[];
    getExtendedMenu(): {
        text: string;
        click: string;
    }[];
    otherPanelInFullscreenMode(): boolean;
    calculatePanelHeight(): void;
    render(payload?: any): void;
    toggleEditorHelp(index: any): void;
    duplicate(): void;
    updateColumnSpan(span: any): void;
    removePanel(): void;
    editPanelJson(): void;
    replacePanel(newPanel: any, oldPanel: any): void;
    sharePanel(): void;
    openInspector(): void;
}
