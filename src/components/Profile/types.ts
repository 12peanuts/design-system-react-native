export enum AvatarSize {
    XSmall = '32px',
    Small = '42px',
    Medium = '50px',
    Large = '60px',
    XLarge = '72px',
    XXLarge = '118px',
}
export type AvatarSizeType = keyof typeof AvatarSize;
export type AvatarType = 'default' | 'with-badge-dot' | 'with-badge-number' | 'with-badge-icon';
export type BadgePosition = 'top' | 'bottom';
