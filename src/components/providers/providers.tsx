import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
};

export default Providers;


// import React from 'react';
// import { dark } from "@clerk/themes";
// import { ClerkProvider } from '@clerk/nextjs';

// interface Props {
//     children: React.ReactNode;
// }

// const Providers = ({ children }: Props) => {
//     return (
//         <ClerkProvider appearance={{ baseTheme: dark }}>
//             {children}
//         </ClerkProvider>
//     )
// };

// export default Providers