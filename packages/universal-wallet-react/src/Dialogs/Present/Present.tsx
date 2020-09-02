import React from 'react';

import { Fullscreen } from '../Fullscreen';
import { DialogContent } from './DialogContent';

export interface IPresentProps {
  trigger: any;
  dialogTitle: any;
  dialogSubmitTitle: any;
  handleCancel: any;
  handleSubmit: any;
}

export const Present = ({
  trigger,
  dialogTitle,
  dialogSubmitTitle,
  handleCancel,
  handleSubmit,
  wallet,
}: any) => {
  const [dialogState, setDialogState] = React.useState({
    editorValue: '',
    verificationMethod: '',
    domain: '',
    challenge: '',
  });
  return (
    <div>
      <Fullscreen
        trigger={trigger}
        dialogTitle={dialogTitle}
        dialogSubmitTitle={dialogSubmitTitle}
        handleCancel={handleCancel}
        handleSubmit={() => {
          handleSubmit(dialogState);
        }}
      >
        <DialogContent
          dialogState={dialogState}
          setDialogState={setDialogState}
          wallet={wallet}
        />
      </Fullscreen>
    </div>
  );
};
