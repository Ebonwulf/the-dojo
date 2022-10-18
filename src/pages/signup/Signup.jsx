import { useState } from 'react';
import './Signup.scss';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(displayName, email, password, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);
    if (!selected) {
      setThumbnailError('Please select a file');
      return;
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image');
      return;
    }
    if (selected.size > 200000) {
      setThumbnailError('Image file size must be less than 200kb');
      return;
    }
    setThumbnailError(null);
    setThumbnail(selected);
    console.log('Thumbnail updated');
  };

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        <span>Display name:</span>
        <input
          required
          type='text'
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          required
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Profile thumbnail:</span>
        <input required type='file' onChange={handleFileChange} />
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>
      <button className='btn'>Sign up</button>
    </form>
  );
};

export default Signup;
