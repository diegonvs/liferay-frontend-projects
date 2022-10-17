/**
 * SPDX-FileCopyrightText: © 2017 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: MIT
 */

const MultiTester = require('../../../../../scripts/MultiTester');
const rule = require('../../../lib/rules/no-global-dialogs');

const parserOptions = {
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},
};

const ruleTester = new MultiTester(parserOptions);

ruleTester.run('no-global-dialogs', rule, {
	invalid: [
		{

			// As a global fetch without an import.

			code: `
                function doSomething() {
                    alert('Fiona is meowing');
                }
             `,
			errors: [
				{
					messageId: 'noGlobalDialogs',
					type: 'CallExpression',
				},
			],
		},
		{

			// As a global fetch without an import.

			code: `
               function doSomething() {
                   confirm('Fiona is meowing');
               }
            `,
			errors: [
				{
					messageId: 'noGlobalDialogs',
					type: 'CallExpression',
				},
			],
		},
		{

			// As a global fetch without an import.

			code: `
               function doSomething() {
                   if (confirm('Fiona is meowing')) {
                        // do something
                   }
               }
            `,
			errors: [
				{
					messageId: 'noGlobalDialogs',
					type: 'CallExpression',
				},
			],
		},
		{

			// As a global fetch without an import.

			code: `
                 Liferay.Util.openAlertModal({message: 'Fiona is meowing!'});
             `,
			errors: [
				{
					messageId: 'noGlobalDialogs',
					type: 'CallExpression',
				},
			],
		},
		{

			// As a global fetch without an import.

			code: `
                Liferay.Util.openConfirmModal({message: 'Fiona is meowing!'});
             `,
			errors: [
				{
					messageId: 'noGlobalDialogs',
					type: 'CallExpression',
				},
			],
		},
		{

			// As a global fetch without an import.

			code: `
                function doSomething() {
                    if (confirm('Is Fiona meowing?')) {
                        // whether confirmed
                    }
                }
            `,
			errors: [
				{
					messageId: 'noGlobalDialogs',
					type: 'CallExpression',
				},
			],
		},
	],

	valid: [
		{

			// Named import from frontend-js-web

			code: `
                 import {openAlertModal} from 'frontend-js-web';
 
                 function doSomething() {
                    openAlertModal({message: 'Fiona woke-up!'});
                 }
             `,
		},
		{

			// Named import from frontend-js-web

			code: `
                import {openConfirmModal} from 'frontend-js-web';

                function doSomething(url) {
                    openConfirmModal(
                        {
                            message: 'Fiona woke-up!',
                            onConfirm: (isConfirmed) => {
                                if (isConfirmed) {
                                    // do something
                                }
                            }
                        }
                    );
                }
            `,
		},
	],
});
