const template = (variables, { tpl }) => {
  const componentName = variables.componentName.replace('Svg', '')
  return tpl`
        import { css } from '@emotion/react';
        ${variables.imports};

        const SvgIcon = (${variables.props}) => ${variables.jsx}
        
        interface Props extends SVGProps<SVGSVGElement> {
            size?: 'small' | 'medium' | 'large' 
        }
        
        const sizes = {
            small: 20,
            medium: 24,
            large: 36,
        };

        const svgCss = (size: Props["size"]) =>
            css({
                width: '1em',
                height: '1em',
                color: 'currentColor',
                userSelect: 'none',
                fontSize: sizes[size || 'medium'],
                strokeWidth: '1.5px',
                display: 'inline-block',
                flexShrink: 0,
            }); 
            
        const ${componentName} = (props: Props) => (
            <SvgIcon focusable="false" css={svgCss(props.size)} {...props} />
        );
        
        export default ${componentName};
    `
}

module.exports = template
