import { colors } from './colors';

const typographyRegular = {
    color: colors.CharcoalGrey,
    fontFamily: 'Poppins-Regular',
};
const typographyBold = {
    color: colors.CharcoalGrey,
    fontFamily: 'Poppins-Bold',
};
const typographyItalic = {
    color: colors.CharcoalGrey,
    fontFamily: 'Poppins-Italic',
};

export const typography = {
    Heading1Bold: {
        ...typographyBold,
        fontSize: 28
    },
    Heading1Regular: {
        ...typographyRegular,
        fontSize: 28
    },
    Heading2Bold: {
        ...typographyBold,
        fontSize: 24
    },
    Heading2Regular: {
        ...typographyRegular,
        fontSize: 24
    },
    HeaderTitle: {
        ...typographyBold,
        fontSize: 16
    },
    LargeContent: {
        ...typographyRegular,
        fontSize: 16
    },
    ContentTitle: {
        ...typographyBold,
        fontSize: 14
    },
    Content: {
        ...typographyRegular,
        fontSize: 14
    },
    ContentItalic: {
        ...typographyItalic,
        fontSize: 14
    },
    HeaderSubtitle: {
        ...typographyBold,
        fontSize: 12
    },
    SmallContent: {
        ...typographyRegular,
        fontSize: 12
    },
    SmallContentItalic: {
        ...typographyItalic,
        fontSize: 12,
    },
    HeaderReference: {
        ...typographyBold,
        fontSize: 10
    },
    Reference: {
        ...typographyRegular,
        fontSize: 10
    },
}