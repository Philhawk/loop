import React from 'react';
import { List, ListItem } from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { darkBlack } from '@material-ui/core/colors';

export default ({ openEndedAnswers }) => (
  <div>
    {
        openEndedAnswers.map((answer, index) => ((
        <List>
          <ListItem
            leftAvatar={<Avatar src="https://tracker.moodle.org/secure/attachment/30912/f3.png" size={50}/>}
            secondaryText={
              <p>
                <br/>
                <span style={{color: darkBlack}}>{answer}</span>

              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
        </List>
      ))
    )
  }
  </div>

)
