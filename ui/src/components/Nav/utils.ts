export type NavItemData = {
    id: string,
    label?: string,
};

export const NAV_ITEMS: NavItemData[] = [
    { id: 'intro', label: 'Introduction' },
    { id: 'about-me', label: 'About Me' },
    { id: 'placeholder' },
    { id: 'about-project', label: 'About Project' },
    { id: 'contact', label: 'Contact' },
];

const NAV_ITEMS_REVERSED = [...NAV_ITEMS].reverse();

export const getActiveDOMSection = (): string => {
    const { scrollY } = window;
    let activeSection: HTMLElement | null = null;
    let activeSectionDiff: number | undefined;

    NAV_ITEMS_REVERSED.forEach((i: NavItemData) => {
        const section = document.getElementById(i.id);

        if (!section) {
            return;
        }

        const diff = Math.abs(section.offsetTop - scrollY);

        if (!activeSection || activeSectionDiff === undefined || diff < activeSectionDiff) {
            activeSection = section;
            activeSectionDiff = diff;
        }
    });

    return (activeSection && (activeSection as HTMLElement).id) || '';
};
