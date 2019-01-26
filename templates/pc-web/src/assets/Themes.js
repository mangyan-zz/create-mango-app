/**
 * Created by mangyan on 2018/12/7.
 *
 */
import ColorPalette from './ColorPalette';
import { Dimens } from 'mango-web';

const Themes = {
	//颜色

	//-----------Colors---------------
	primaryColor: ColorPalette.blue.blue1,

	//---背景色
	bgColor: ColorPalette.grey.grey1,
	bgColorSecondary: ColorPalette.grey.grey2,
	bgColorWhite: ColorPalette.white,

	//---字体颜色
	fontColor: ColorPalette.grey.grey6,
	fontColorSecondary: ColorPalette.grey.grey6,
	fontColorTip: ColorPalette.grey.grey5,

	fontColorBlack: ColorPalette.black,
	fontColorWhite: ColorPalette.white,

	//---主要分割线
	lineColor: ColorPalette.grey.grey4,

	//
	borderRadiusSm: Dimens.d2,

	//字体
	fontSizeLg: Dimens.d22,
	fontSizeMm: Dimens.d20,
	fontSizeBase: Dimens.d16,
	fontSizeSm: Dimens.d14,

	//img_logo
	styleImgLogo: {
		height: Dimens.d44,
	},
	styleLine: {
		width: Dimens.fill_width,
		height: Dimens.d1,
		backgroundColor: ColorPalette.grey.grey4
	},
	styleContent: {
		margin: Dimens.d24,
		minHeight: Dimens.d560,
		backgroundColor: ColorPalette.white,
	},
	centerColumn: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column'
	}

};

export default Themes;
