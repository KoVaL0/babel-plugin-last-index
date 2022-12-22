Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    return {
        visitor: {
            UnaryExpression(path) {
                if (path.parent.type === 'MemberExpression' && path.parent.object.type === 'Identifier' && path.node.argument.type === 'NumericLiteral' && Number.isInteger(path.node.argument.value)) {
                    path.replaceWithSourceString(`${path.parent.object.name}.length - ${path.node.argument.value}`);
                }
            }
        }
    }
}
