// import React, { useState } from 'react';
// const { createContext } = require('react');

// export const AuthContext = createContext(null);

// export default function AuthProvider({ children }) {
//   const [token, setToken] = useState('');
//   const [sessionId, setSessionId] = useState('');

//   const changeToken = token => {
//     setToken(token);
//   };

//   const changeSessionId = id => {
//     setSessionId(id);
//   };
//   return (
//     <AuthContext.Provider
//       value={{ changeToken, token, sessionId, changeSessionId }}
//     >
//       {children}
//       {/* обгортаємо Арр для того щоб тут можно було змінювати value */}
//     </AuthContext.Provider>
//   );
// }
// // створюємо свій контекст AuthContext(4стр)
// // створюємо компонент AuthProvider який приймає children та в ньому створюємо локальні стейти які будуть глобальним контекстом
// // все,що буде в контексті треба покласти в пропс value (14стр)
// // обгортаємо в index.js Арр створений компонент
// // створюємо хендлери, що будуть змінювати стейт/контекст
// // достаємо тейти в компонентах(див компонент)
