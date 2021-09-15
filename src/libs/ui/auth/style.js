import { makeStyles } from '@material-ui/core/styles';
import colors from '../utils';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: colors.bl,
        width: '60%',
        margin: 'auto',
        marginTop: '8%',
        borderRadius: '20px',
        boxShadow: 'box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;'
    },
    div_left: {
        width: '50%',
        background: colors.vr,
        padding: '30px',
        textAlign: 'center',
        borderBottomLeftRadius: '20px',
        borderTopLeftRadius: '20px',
    },
    div_right: {
        width: '50%',
        padding: '30px',
        borderRadius: '20px',
        boxShadow: 'box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;'
    },
    form: {
        width: '100%',
        textAlign: 'center'
    },
    titre: {
        color: colors.vr,
        marginBottom: '4Opx',
        fontSize: '2.5em'

    },
    titre1: {
        color: colors.bl,
        marginTop: '6Opx',
        fontSize: '2.5em'
    },
    bntStyle: {
        width: '50%',
        height: '50px',
        marginTop: '40px',
        background: colors.vr,
        color: colors.bl,
        borderColor: colors.bl,
        borderRadius: '20px',
        '&:hover': {
            backgroundColor: colors.vr,
            color: colors.bl,
        }
    },
    text: {
        color: colors.bl,
        marginTop: '30px',
    }
}));

export default useStyles;