/**
 * Record audio from the microphone, render a waveform and download the audio.
 */
import BasePlugin from '../base-plugin.js';
export type RecordPluginOptions = {
    realtimeWaveColor?: string;
    lineWidth?: number;
};
export type RecordPluginEvents = {
    startRecording: [];
    stopRecording: [];
};
declare class RecordPlugin extends BasePlugin<RecordPluginEvents, RecordPluginOptions> {
    private mediaRecorder;
    private recordedUrl;
    private recordedUrl_1;
    static create(options?: RecordPluginOptions): RecordPlugin;
    private loadBlob;
    render(stream: MediaStream): () => void;
    private cleanUp;
    startRecording(): Promise<void>;
    isRecording(): boolean;
    stopRecording(): void;
    getRecordedUrl(): string;
    getRecordedUrl_1(): string;
    destroy(): void;
}
export default RecordPlugin;
