export const fetchMemes = async () => {
    try {
        const response = await fetch("https://api.imgflip.com/get_memes");

        if (!response.ok) {
            throw new Error('Failed to fetch memes');
        }

        const data = await response.json();

        if (!data || !data.data || !data.data.memes || data.data.memes.length === 0) {
            return ["https://i.imgflip.com/30b1gx.jpg"]; 
        }

        return data.data.memes;
    } catch (error) {
        console.error('Error fetching memes:', error.message);
        throw error; 
    }
};