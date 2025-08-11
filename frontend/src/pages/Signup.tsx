import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/UI/Button';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    signup
  } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    setError('');
    setIsLoading(true);
    try {
      const success = await signup(name, email, password);
      if (success) {
        navigate('/');
      } else {
        setError('An account with this email already exists');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="mt-2 text-gray-600">
            Join FM Sports for the best footwear shopping experience
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
              {error}
            </div>}
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input id="name" name="name" type="text" autoComplete="name" required value={name} onChange={e => setName(e.target.value)} className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" required value={password} onChange={e => setPassword(e.target.value)} className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black pr-10" />
                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOffIcon className="h-5 w-5 text-gray-400" /> : <EyeIcon className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Password must be at least 6 characters long
              </p>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input id="confirmPassword" name="confirmPassword" type={showPassword ? 'text' : 'password'} autoComplete="new-password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black" />
            </div>
          </div>
          <div className="flex items-center">
            <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded" />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the{' '}
              <Link to="/terms" className="font-medium text-black hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy-policy" className="font-medium text-black hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>
          <div>
            <Button type="submit" variant="primary" size="lg" fullWidth disabled={isLoading}>
              {isLoading ? 'Creating account...' : 'Create account'}
            </Button>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-black hover:text-gray-800">
                Sign in
              </Link>
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or sign up with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button type="button" className="py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              Google
            </button>
            <button type="button" className="py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>;
};
export default SignupPage;