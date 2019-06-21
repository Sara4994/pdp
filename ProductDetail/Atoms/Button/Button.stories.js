import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Button from './Button';

// export const task = {
//   id: '1',
//   title: 'Test Task',
//   state: 'TASK_INBOX',
//   updatedAt: new Date(2018, 0, 1, 9, 0),
// };

// export const actions = {
//   onPinTask: action('onPinTask'),
//   onArchiveTask: action('onArchiveTask'),
// };

storiesOf('Button', module)
  .add('Button with background color', () => <Button text='Add To Cart' type='primary'  />)
  .add('Button without background color', () => <Button text='Wishlist'   />)
  
