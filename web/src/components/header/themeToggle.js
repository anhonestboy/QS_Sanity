import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
export default function ThemeToggle() {
     return (
       <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
             <input type="checkbox" className="toggle m-5 border-4 dark:border-0 border-black dark:border-background_dark text-black dark:text-text_dark"
               onChange={e => 
                 toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
               />{' '}            
          </label>    
         
         )}
        </ThemeToggler>
     )
}