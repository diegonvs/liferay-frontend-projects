/**
 * SPDX-FileCopyrightText: © 2017 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: MIT
 */

const DESCRIPTION = `
On March 2020, chromium launched a proposal to deprecate browser native dialogs alert(), confirm(), and prompt(), when the code creating them runs embedded in a frame and was loaded from a different origin than the host page. As a result, once chrome rolls out this, customers rendering Liferay in a cross-domain iframe would not get browser-native dialogs rendered.

So, We decided to implement replacements for these functions called openAlertModal and openConfirmModal. They will behave as native dialogs unless you enable custom implementation under Instance Settings -> Custom Dialogs. It will render our fallback dialogs implemented using ClayModal/openModal API instead of the native ones.
`;

module.exports = {
 create(context) {
     let foundError = false;

    //  const isFetchIdentifier = (node) => {
    //      return node.type === 'Identifier' && node.name === 'fetch';
    //  };

    // const isValidDefaultImport = (node) => {
    //     return (
    //         (node.source.value.endsWith('/fetch') ||
    //             node.source.value.endsWith('/fetch.es')) &&
    //         node.specifiers.find(
    //             (specifier) => specifier.type === 'ImportDefaultSpecifier'
    //         )
    //     );
    // };

    //  const isValidNamedImport = (node) => {
    //      return (
    //          node.source.value === 'frontend-js-web' &&
    //          node.specifiers.find((specifier) => {
    //              return (
    //                  specifier.imported &&
    //                  specifier.imported.name === 'fetch'
    //              );
    //          })
    //      );
    //  };

     return {
         CallExpression(node) {
             if (isFetchIdentifier(node.callee) && !foundError) {
                 context.report({
                     messageId: 'noGlobalFetch',
                     node,
                 });
             }
         },

         ImportDeclaration(node) {
             if (
                 node.source &&
                 node.source.type === 'Literal' &&
                 (isValidDefaultImport(node) || isValidNamedImport(node))
             ) {
                 foundError = true;
             }
         },
     };
 },

 meta: {
     docs: {
         category: 'Best Practices',
         description: DESCRIPTION,
         recommended: false,
         url: 'https://issues.liferay.com/browse/LPS-164034',
     },
     fixable: null,
     messages: {
        noGlobalDialogs: DESCRIPTION,
     },
     schema: [],
     type: 'problem',
 },
};
