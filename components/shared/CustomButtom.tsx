import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

interface Props extends PressableProps {
    children: string;
    color?: 'primary' | 'secundary' | 'tertiary';

    variant?: 'contained' | 'text-only';
    className?: string;
}

const CustomButtom = React.forwardRef(
    ({ children, color = 'primary', onPress, onLongPress, variant ='contained', className }: Props, ref: React.Ref<View>) => {

    const btnColor ={
        primary: 'bg-primary',
        secundary: 'bg-secundary',
        tertiary: 'bg-tertiary',
    }[color];

    const textColor = {
        primary: 'text-primary',
        secundary: 'text-secundary',
        tertiary: 'text-tertiary',
    }[color];

    if (variant === 'text-only'){
        return(
            <Pressable
                className={`p-3 ${className}`}
                onPress={ onPress }
                onLongPress={ onLongPress }
                ref={ref}
                >
                <Text className={`text-center ${textColor} font-work-medium`}>{children}</Text>
            </Pressable>
        );
    }

  return (
    <Pressable
        className={`p-3 rounded-md ${ btnColor } active:opacity-90 ${className}`}
        onPress={ onPress }
        onLongPress={ onLongPress }
        ref={ref}
        >
        <Text className='text-white text-center font-work-medium'>{children}</Text>
    </Pressable>
  );
});

export default CustomButtom;