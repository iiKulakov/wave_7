import EventEmitter from './event-emitter.js';
import type { WaveSurferOptions } from './wavesurfer.js';
type RendererEvents = {
    click: [relativeX: number];
    drag: [relativeX: number];
    scroll: [relativeStart: number, relativeEnd: number];
    render: [];
};
declare class Renderer extends EventEmitter<RendererEvents> {
    private static MAX_CANVAS_WIDTH;
    private options;
    private container;
    private scrollContainer;
    private wrapper;
    private canvasWrapper;
    private progressWrapper;
    private cursor;
    private timeouts;
    private isScrolling;
    private audioData;
    private resizeObserver;
    private isDragging;
    constructor(options: WaveSurferOptions);
    private initEvents;
    private initDrag;
    private initHtml;
    setOptions(options: WaveSurferOptions): void;
    getWrapper(): HTMLElement;
    getScroll(): number;
    destroy(): void;
    private createDelay;
    private convertColorValues;
    private renderBars;
    private renderSingleCanvas;
    private renderWaveform;
    render(audioData: AudioBuffer): void;
    reRender(): void;
    zoom(minPxPerSec: number): void;
    private scrollIntoView;
    renderProgress(progress: number, isPlaying?: boolean): void;
}
export default Renderer;