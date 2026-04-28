export const ErrorState = ({ message='Something went wrong' }: { message?: string }) => <div className='rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-600'>{message}</div>;
