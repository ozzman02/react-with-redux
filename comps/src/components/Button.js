import className from "classnames";
import { twMerge } from 'tailwind-merge';

/*
    In JS ...rest is collecting all the remaining props for example event handlers/

    In our example we want to assign the remaining props to the button:

        <button { ...rest } className={classes}>{children}</button>

    If we want to use a specific prop then:

        <button onClick={rest.onClick} className={classes}>{children}</button>

*/
function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    /*
        For each key-value pair:
	        
            - Is the value truthy? If so, add the key to the string that I'm building.
		
        Example
	
	        const primary = true;
	        const warning = false;
	
	        classNames({
		        'bg-blue-500': primary,
		        'bg-yellow-500': warning
	        });
        
        The first argument of the className function refers to the string that we are going to get at anytime.
        In this case: rest.className, 'flex items-center px-3 py-1.5 border'

        The purpose of rest.className is to include some other css style or prop from the parent.

    */
    const classes = twMerge(
        className(rest.className, 'flex items-center px-3 py-1.5 border', {
            'border-blue-500 bg-blue-500 text-white': primary,
            'border-gray-900 bg-gray-900 text-white': secondary,
            'border-green-500 bg-green-500 text-white': success,
            'border-yellow-400 bg-yellow-400 text-white': warning,
            'border-red-500 bg-red-500 text-white': danger,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500': outline && primary,
            'text-gray-900': outline && secondary,
            'text-green-500': outline && success,
            'text-yellow-400': outline && warning,
            'text-red-500': outline && danger
        })
    );

    return (
        <button { ...rest } className={classes}>
            {children}
        </button>
    );
}

Button.propTypes = {
    checkButtonVariationValue: ({ primary, secondary, success, warning, danger, outline, rounded }) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger)
            + Number(!!outline)
            + Number(!!rounded)

        //console.log(count);

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger, outline, rounded can be true');
        }
    }
}

export default Button;