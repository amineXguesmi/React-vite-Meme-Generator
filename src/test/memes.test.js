import { describe, test, expect } from 'vitest';
import { fetchMemes } from './../functions/api';


describe('fetchMemes function', () => {
    test('fetches memes successfully', async () => {
        
        global.fetch = async () => ({
            ok: true,
            json: async () => ({ data: { memes: [{ id: '1', url: 'https://example.com/meme1.jpg' }] } }),
        });


        const result = await fetchMemes();
        expect(result).toEqual([{ id: '1', url: 'https://example.com/meme1.jpg' }]);
    });

    test('handles empty response', async () => {
        global.fetch = async () => ({
            ok: true,
            json: async () => ({ data: { memes: [] } }),
        });

        const result = await fetchMemes();
        expect(result).toEqual(["https://i.imgflip.com/30b1gx.jpg"]);
    });

    test('handles failed fetch', async () => {
        global.fetch = async () => ({ ok: false });

        try {
            await fetchMemes();
        } catch (error) {
            expect(error.message).toBe('Failed to fetch memes');
        }
    });

    test('handles failed response', async () => {
        global.fetch = async () => ({
            ok: true,
            json: async () => ({ data: {} }),
        });

        try {
            await fetchMemes();
        } catch (error) {
            expect(error.message).toBe('Failed to fetch memes');
        }
    });
});