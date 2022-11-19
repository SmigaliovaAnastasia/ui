import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Pagination } from '@mui/material';
import { GameService } from '../../services/GameService';
import { useState, useEffect, useReducer } from 'react';
import { pagedRequestReducer } from '../../common/Reducers/PagedRequestReducer';
import { defaultPagedRequest, defaultPagedRequestWithFilter } from '../../common/Constants/DefaultPagedRequest';
import { PagedResult } from '../../common/Models/PagedRequest/PagedResult';
import { GameListDto } from '../../common/Entities/GameDtos/GameListDto';
import { GameSmallComponent } from '../Games/GameSmallComponent';
import './GameSelectDialog.css';
import { DialogContext } from '../../common/Contexts/DialogContext';
import { CollectionService } from '../../services/CollectionService';
import { GetUser } from '../../services/Utils/GetUser';
import { CollectionDto } from '../../common/Entities/CollectionDtos/CollectionDto';
import { CollectionListComponent } from '../Collections/CollectionListComponent';
import { CollectionSmallComponent } from '../Collections/CollectionSmallComponent';

export default function CollectionSelectDialog(props: { gameId: string }) {
  const { open, setOpen } = React.useContext(DialogContext);
  const collectionService = new CollectionService;

  const [collections, setCollections] = useState<JSX.Element[]>();
  const [totalPages, setTotalPages] = useState(1);

  const [state, dispatch] = useReducer(pagedRequestReducer, defaultPagedRequestWithFilter([
    {
      filterProperty: "!game_id",
      filterOperator: "",
      value: props.gameId
    },
    {
      filterProperty: "application_user_id",
      filterOperator: "",
      value: GetUser()?.userId ?? ""
    },
  ]));

  useEffect(() => {
    dispatch({
      type: "setFilter",
      payload: {
        filter: {
          filterProperty: "name",
          filterOperator: "",
          value: ""
        },
        multipleChoice: false
      }
    });
  }, [open]);

  useEffect(() => {
    let data = collectionService.GetPagedCollections(state);
    data.then((pagedResult: PagedResult<CollectionDto>) => {
      setTotalPages(Math.ceil(pagedResult.total / pagedResult.pageSize));
      setCollections(pagedResult.items.map((g) => {
        return <CollectionSmallComponent
          key={g.id}
          collection={g}
          gameId={props.gameId}
          onClick={handleClose}
        />
      }));
    });
  }, [state]);

  const handleNameChange = (name: string) => {
    dispatch({
      type: "setFilter",
      payload: {
        filter: {
          filterProperty: "name",
          filterOperator: "",
          value: name
        },
        multipleChoice: false
      }
    });
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        maxWidth="md"
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Choose a collection to add the game to it:"}
        </DialogTitle>
        <DialogContent>
          <div className="searchbar_container">
            <input className="searchbar" type="text" placeholder="Search" onChange={e => handleNameChange(e.target.value)} />
            <img alt="" className="magnifier" src="/img/Magnifier.svg" />

          </div>
          <div className="small_game_container">
            {collections}
          </div>
          <div className="pagination">
            <Pagination count={totalPages} onChange={(e, value) => dispatch({ type: "setPage", payload: value })} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}