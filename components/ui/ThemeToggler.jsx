'use client';

import {Button} from './button';
import { MoonIcon, SunIcon} from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';



const ThemeToggler = () => {
  const { theme, setTheme} = useTheme ();


 return (
    <div>
        <Button>
            <SunIcon/>
            <MoonIcon/>
        </Button>

    </div>
 );
};

export default ThemeToggler;
