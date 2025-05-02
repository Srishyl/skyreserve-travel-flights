import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const { signIn, signUp, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/flights/flight-1.jpg)',
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#717D7E]/95 to-[#212F3C]/95" />
      
      {/* Content */}
      <div className="max-w-md w-full space-y-8 p-8 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl relative z-10">
        <div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-[#212F3C]">
            {isSignUp ? 'Create your account' : 'Welcome back'}
          </h2>
          <p className="mt-2 text-center text-sm text-[#717D7E]">
            {isSignUp ? 'Start your journey with us' : 'Continue your journey with us'}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="email"
                required
                className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-[#717D7E]/20 placeholder-[#717D7E] text-[#212F3C] focus:outline-none focus:ring-[#212F3C] focus:border-[#212F3C] focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                required
                className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-[#717D7E]/20 placeholder-[#717D7E] text-[#212F3C] focus:outline-none focus:ring-[#212F3C] focus:border-[#212F3C] focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#212F3C] hover:bg-[#212F3C]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#212F3C] transition-colors"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="group relative w-full flex justify-center py-2 px-4 border border-[#717D7E]/20 text-sm font-medium rounded-md text-[#212F3C] bg-white hover:bg-[#717D7E]/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#212F3C] transition-colors"
            >
              Sign in with Google
            </button>

            <button
              type="button"
              className="text-sm text-[#717D7E] hover:text-[#212F3C] transition-colors"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp
                ? 'Already have an account? Sign in'
                : "Don't have an account? Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 