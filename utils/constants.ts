
const IMAGE_CONSTANTS = {
    profilePicture: {
        src: "/pcboi2.png",
        alt: "Profile Picture",
    }
}

const BTN_PRIMARY_TAILWIND = "cursor-pointer rounded-md p-1.5 hover:bg-[#2f3742] transition-colors flex items-center justify-center hidden md:block";
const BTN_PRIMARY_STYLE = {
    border: `solid var(--borderWidth-thin) var(--button-default-borderColor-rest)`,
    borderRadius: `var(--borderRadius-medium)`,
    width: `var(--base-size, 32px)`,
    height: `var(--base-size, 32px)`,
}

export {
    IMAGE_CONSTANTS,
    BTN_PRIMARY_TAILWIND,
    BTN_PRIMARY_STYLE,
};