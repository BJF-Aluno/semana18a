import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">
          Projeto de CI/CD
        </h1>
        <p className="text-gray-600 mb-6">
          Esta é uma aplicação simples para testar o seu pipeline.
        </p>
        
        <div className="mt-4 flex flex-col items-center">
          <p className="text-xl text-gray-800">
            Contador: <span className="font-bold text-indigo-500">{count}</span>
          </p>
          <button
            onClick={() => setCount(count + 1)}
            className="mt-4 px-6 py-3 bg-indigo-500 text-white font-bold rounded-full shadow-lg hover:bg-indigo-600 transition-colors"
          >
            Clique para Aumentar
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
