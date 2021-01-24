export const getProgressValue = (min: number, max: number, progress: number): number => (
    min + ((max - min) * progress)
);
