/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/* eslint-env jest */

const authToken = 'default-mocked-auth-token';

/**
 * https://github.com/liferay/liferay-portal/blob/efc53b8a82e3afff06aacc26118fbe7231acffff/portal-web/docroot/html/common/themes/top_js.jspf#L157
 */
const FeatureFlags = {};

/**
 * Event support APIs on the `Liferay` object inherited from `A.Attributes`
 *
 * https://github.com/liferay/liferay-portal/blob/31073fb75fb0d3b309f9e0f921cb7a469aa2703d/modules/apps/frontend-js/frontend-js-web/src/main/resources/META-INF/resources/liferay/events.js#L66
 * https://yuilibrary.com/yui/docs/api/classes/Attribute.html
 */
const events = {

	/**
	 * https://yuilibrary.com/yui/docs/api/files/event-custom_js_event-target.js.html#l372
	 */
	detach: jest.fn(),

	/**
	 * https://yuilibrary.com/yui/docs/api/files/event-custom_js_event-target.js.html#l700
	 */
	fire: jest.fn(),

	/**
	 * https://yuilibrary.com/yui/docs/api/files/event-custom_js_event-target.js.html#l227
	 */
	on: jest.fn(),

	/**
	 * https://yuilibrary.com/yui/docs/api/files/event-custom_js_event-target.js.html#l136
	 */
	once: jest.fn(),
};

/**
 * Contains a fallback/dummy implementation of
 * `Liferay.Language.get`. In practice, this call is rewritten in a
 * ServerFilter, so runtime calls to `Liferay.Language.get` should not
 * be found in production code. A better match for the real behaviour
 * would be a babel plugin to rewrite calls to the API with their
 * "translated" value.
 *
 * https://github.com/liferay/liferay-portal/blob/31073fb75fb0d3b309f9e0f921cb7a469aa2703d/modules/apps/frontend-js/frontend-js-aui-web/src/main/resources/META-INF/resources/liferay/language.js
 */
const Language = {

	/**
	 * https://github.com/liferay/liferay-portal/blob/31073fb75fb0d3b309f9e0f921cb7a469aa2703d/modules/apps/frontend-js/frontend-js-aui-web/src/main/resources/META-INF/resources/liferay/language.js#L18
	 */
	get: jest.fn((key) => key),
};

/**
 * https://github.com/liferay/liferay-portal/blob/f8ea9617f99238f7f5b6e4824bf71ab2e64fdfdd/portal-web/docroot/html/common/themes/top_js.jspf#L168-L170
 */
const PropsValues = {
	JAVASCRIPT_SINGLE_PAGE_APPLICATION_TIMEOUT: 0,

	NTLM_AUTH_ENABLED: false,

	UPLOAD_SERVLET_REQUEST_IMPL_MAX_SIZE: 104857600,
};

/**
 * https://github.com/liferay/liferay-portal/blob/a4866af62eb89c69ee00d0e69dbe7ff092b50048/modules/apps/frontend-js/frontend-js-web/src/main/resources/META-INF/resources/liferay/global.es.js#L101-L104
 */
const Session = {

	/**
	 * https://github.com/liferay/liferay-portal/blob/a4866af62eb89c69ee00d0e69dbe7ff092b50048/modules/apps/frontend-js/frontend-js-web/src/main/resources/META-INF/resources/liferay/global.es.js#L102
	 */
	get: jest.fn(() => Promise.resolve({})),

	/**
	 * https://github.com/liferay/liferay-portal/blob/a4866af62eb89c69ee00d0e69dbe7ff092b50048/modules/apps/frontend-js/frontend-js-web/src/main/resources/META-INF/resources/liferay/global.es.js#L103
	 */
	set: jest.fn(() => Promise.resolve({})),
};

/**
 * Contains APIs that provide information about the running context of
 * the portal. The JS ThemeDisplay object is a representation of its
 * Java counterpart simplified for JS access.
 *
 * https://github.com/liferay/liferay-portal/blob/31073fb75fb0d3b309f9e0f921cb7a469aa2703d/portal-web/docroot/html/common/themes/top_js.jspf#L147
 */
const ThemeDisplay = {

	/**
	 * https://github.com/liferay/liferay-portal/blob/a4866af62eb89c69ee00d0e69dbe7ff092b50048/portal-web/docroot/html/common/themes/top_js.jspf#L188
	 */
	getBCP47LanguageId: jest.fn(() => 'en-US'),

	/**
	 * https://github.com/liferay/liferay-portal/blob/31073fb75fb0d3b309f9e0f921cb7a469aa2703d/portal-web/docroot/html/common/themes/top_js.jspf#L217
	 */
	getDoAsUserIdEncoded: jest.fn(() => 'default-mocked-do-as-user-id'),

	/**
	 * https://github.com/liferay/liferay-portal/blob/a4866af62eb89c69ee00d0e69dbe7ff092b50048/portal-web/docroot/html/common/themes/top_js.jspf#L220
	 */
	getLanguageId: jest.fn(() => 'en-US'),

	/**
	 * https://github.com/liferay/liferay-portal/blob/a4866af62eb89c69ee00d0e69dbe7ff092b50048/portal-web/docroot/html/common/themes/top_js.jspf#L226
	 */
	getPathContext: jest.fn(() => ''),

	/**
	 * https://github.com/liferay/liferay-portal/blob/31073fb75fb0d3b309f9e0f921cb7a469aa2703d/portal-web/docroot/html/common/themes/top_js.jspf#L235
	 */
	getPathMain: jest.fn(() => '/c'),

	/**
	 * https://github.com/liferay/liferay-portal/blob/31073fb75fb0d3b309f9e0f921cb7a469aa2703d/portal-web/docroot/html/common/themes/top_js.jspf#L238
	 */
	getPathThemeImages: jest.fn(() => ''),

	/**
	 * https://github.com/liferay/liferay-portal/blob/31073fb75fb0d3b309f9e0f921cb7a469aa2703d/portal-web/docroot/html/common/themes/top_js.jspf#L247
	 */
	getPortalURL: jest.fn(() => 'http://localhost:8080'),
};

/**
 * General utilities on the `Liferay` object. Possible API sources are:
 *
 * - https://github.com/liferay/liferay-portal/blob/31073fb75fb0d3b309f9e0f921cb7a469aa2703d/modules/apps/frontend-js/frontend-js-web/src/main/resources/META-INF/resources/liferay/global.es.js
 * - https://github.com/liferay/liferay-portal/blob/31073fb75fb0d3b309f9e0f921cb7a469aa2703d/modules/apps/frontend-js/frontend-js-aui-web/src/main/resources/META-INF/resources/liferay/util.js
 */
const Util = {

	/**
	 * https://github.com/liferay/liferay-portal/blob/31073fb75fb0d3b309f9e0f921cb7a469aa2703d/modules/apps/frontend-js/frontend-js-aui-web/src/main/resources/META-INF/resources/liferay/util.js#L442
	 */
	getGeolocation: jest.fn(),

	/**
	 * https://github.com/liferay/liferay-portal/blob/a4866af62eb89c69ee00d0e69dbe7ff092b50048/modules/apps/frontend-js/frontend-js-web/src/main/resources/META-INF/resources/liferay/global.es.js#L75
	 */
	isEqual: jest.fn((a, b) => a === b),

	/**
	 * https://github.com/liferay/liferay-portal/blob/31073fb75fb0d3b309f9e0f921cb7a469aa2703d/modules/apps/frontend-js/frontend-js-web/src/main/resources/META-INF/resources/liferay/util/navigate.es.js
	 */
	navigate: jest.fn(),

	/**
	 * https://github.com/liferay/liferay-portal/blob/31073fb75fb0d3b309f9e0f921cb7a469aa2703d/modules/apps/frontend-js/frontend-js-web/test/liferay/util/ns.es.js
	 */
	ns: jest.fn(() => ({})),

	/**
	 * https://github.com/liferay/liferay-portal/blob/31073fb75fb0d3b309f9e0f921cb7a469aa2703d/modules/apps/frontend-js/frontend-js-aui-web/src/main/resources/META-INF/resources/liferay/util.js#L999
	 */
	sub: jest.fn(),
};

module.exports = {
	...events,
	authToken,
	FeatureFlags,
	Language,
	PropsValues,
	Session,
	ThemeDisplay,
	Util,
};
