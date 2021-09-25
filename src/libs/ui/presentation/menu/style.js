import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    appBar: {
        background: colors.bl,
        boxShadow: 'none',
        width: '100%'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: colors.vr
    },
    bnt: {
        color: colors.bl,
        background: colors.vr,
        '&:hover': {
            backgroundColor: colors.vr,
            color: colors.bl,
        }
    }
}));

export default useStyles;