import { makeStyles } from '@material-ui/core/styles';
import colors from '../utils';

const useCoponentsStyles = makeStyles((theme) => ({
    bntStyle: {
        width: '40%',
        background: colors.vr,
        color: colors.bl,
        marginTop: '30px',
        '&:hover': {
            backgroundColor: colors.vr,
            color: colors.bl,
        }
    },
    inpt: {
        width: '70%',
        marginTop: '30px',
        color: colors.bl,
        '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
            '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
                borderColor: colors.vr,
                borderWidth: '0.5px'
            },
        }
    },
    cssLabel: {
        "&.Mui-focused": {
            color: 'black'
        }
    }
}));

export default useCoponentsStyles;