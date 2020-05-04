import { makeStyles } from '@material-ui/core/styles';


export const productCardStyles = (styleParams) => {

  const { size } = styleParams;
  const useStyle = makeStyles({
    fontFace: {
        fontSize: `${((size/16))}rem`,
    }
  })

  return useStyle;
} 