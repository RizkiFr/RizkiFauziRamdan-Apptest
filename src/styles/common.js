import { colors } from './colors'
import { spacing } from './spacing'

export const container = {
    flex: 1,
    padding: spacing.m,
    backgroundColor: colors.White
}

export const wrapper = {
    padding: spacing.xs,
    backgroundColor: colors.White,
}

export const containerRow = {
    ...wrapper,
    flexDirection: 'row',
    alignItems: 'center'
}

export const containerRowSpaceBetween = {
    ...containerRow,
    justifyContent: 'space-between'
}

export const wrapperRow = {
    ...wrapper,
    flexDirection: 'row',
    alignItems: 'center'
}

export const wrapperRowSpaceBetween = {
    ...containerRow,
    justifyContent: 'space-between',
}

export const flexRow = {
    flexDirection: 'row',
    alignItems: 'center'
}

export const flexRowSpaceBetween = {
    ...flexRow,
    justifyContent: 'space-between'
}

export const shadow = {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    backgroundColor: colors.White,
    shadowOffset: {
        width: 0, height: 0
    }
}

export const footerContainer = {
    paddingHorizontal: spacing.m,
    paddingTop: spacing.s,
    paddingBottom: spacing.s
}