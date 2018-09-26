import axios from 'axios';
import { Qs } from 'qs';
import { resolve } from 'url';
/**
 * 通过code 获取openId
 * @param {*} url GetOpenIdByCode_Url
 * @param {*} code code
 * @param {*} cate 附加参数 默认当前公众号appId
 */
const GetOpenIdByCode = (url, code, cate) => {
	return new Promise((resolve, reject) => {
		axios({
			method: 'post',
			url,
			data: Qs.stringify({ code, cate })
		}).then((res) => {
			let { data, status } = res.data.data;
		});
	});
};

export { GetOpenIdByCode };
