/**
 * Created by mangyan on 2018/12/7.
 *
 */
import ColorPalette from './ColorPalette';
import { Dimens } from 'mango-web';

const Themes = {
	//颜色

	//-----------Colors---------------
	primary_color: ColorPalette.blue.blue1,

	//---背景色
	bg_color: ColorPalette.grey.grey1,
	bg_color_secondary: ColorPalette.grey.grey2,
	bg_color_white: ColorPalette.white,

	//---字体颜色
	font_color: ColorPalette.grey.grey6,
	font_color_secondary: ColorPalette.grey.grey6,
	font_color_tip: ColorPalette.grey.grey5,

	font_color_black: ColorPalette.black,
	font_color_white: ColorPalette.white,

	//---主要分割线
	line_color: ColorPalette.grey.grey4,

	//
	border_radius_sm: Dimens.d2,

	//字体
	font_size_lg: Dimens.d22,
	font_size_mm: Dimens.d20,
	font_size_base: Dimens.d16,
	font_size_sm: Dimens.d14,

	//img_logo
	style_img_logo: {
		height: Dimens.d44,
	},
	style_line: {
		width: Dimens.fill_width,
		height: Dimens.d1,
		backgroundColor: ColorPalette.grey.grey4
	},
	style_content: {
		margin: Dimens.d24,
		minHeight: Dimens.d560,
		backgroundColor: ColorPalette.white,
	},

};

export default Themes;
