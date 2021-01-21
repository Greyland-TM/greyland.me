
import { createGlobalStyle } from 'styled-components';
import back from '../../media/city.jpg';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        // transition: all 0.25s linear;
    }

    .navbar {
        background-image: linear-gradient(to right, ${({ theme }) => theme.navbar}, ${({ theme }) => theme.navbar}); 
        transition: all 0.25s linear;
        opacity: ${({ theme }) => theme.navOpacity};

        &__item {
            color: ${({ theme }) => theme.text}

            &:hover,
            &:active {
                background-color: ${({ theme }) => theme.navBarHover}; 
                border-bottom: 2px solid ${({ theme }) => theme.navBarBorder}; 
            }git add <div className=""></div>
        }
    }

    .toggle-container__lable {
        color: ${({ theme }) => theme.text}
    }

    .landing {
        background-image: linear-gradient(
            -76deg,
            ${({ theme }) => theme.color5light},  0%,
            ${({ theme }) => theme.color5},  30.5%,
            ${({ theme }) => theme.color5}, 42.5%,
            ${({ theme }) => theme.color4}, 41.5%, 
            ${({ theme }) => theme.color4} 43%,
            ${({ theme }) => theme.color3} 41.5%, 
            ${({ theme }) => theme.color3}, 43.75%,
            ${({ theme }) => theme.main1} 43.75%),
            url(${({back})}); 

            color: ${({ theme }) => theme.text};
            opacity: ${({ theme }) => theme.navOpacity};  
    }

    .skills {
        background-color: ${({ theme }) => theme.skills};
        color: ${({ theme }) => theme.text};

        &__item {
    
            &:hover {
                background-color: ${({ theme }) => theme.main1};
            }
        }
    }

    .description {
        background-color: ${({ theme }) => theme.description};
        color: ${({ theme }) => theme.text};

        &__content {
            background-image: linear-gradient(${({ theme }) => theme.text}, ${({ theme }) => theme.text}); 
    }

    .projects {
        background-color: ${({ theme }) => theme.main1};
        color: ${({ theme }) => theme.text};
    }
  `;

  export default GlobalStyles;


