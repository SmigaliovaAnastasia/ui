import React, { useContext, useEffect, useState } from "react";
import { GameService } from "../../services/GameService";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from '@mui/system';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { CollectionService } from "../../services/CollectionService";
import { UserContext } from "../../common/Contexts/UserContext";
import { CollectionCreateDto } from "../../common/Entities/CollectionDtos/CollectionCreateDto";
import { useParams } from "react-router-dom";
import { parseJsonSourceFileConfigFileContent } from "typescript";
import { CollectionCreateUpdateComponent } from "../../components/Collections/CollectionCreateUpdateComponent";
import { CollectionDto } from "../../common/Entities/CollectionDtos/CollectionDto";
import { cp } from "fs";

export function UpdateCollection() {

  const params = useParams();
  const collectionService = new CollectionService();
  const [collectionComponent, setCollectionComponent] = useState<JSX.Element>();

  useEffect(() => {
    var request = collectionService.getCollectionById(String(params.id));
    request.then(d => {
      setCollectionComponent(
        <CollectionCreateUpdateComponent collection={{
          name: d.name,
          description: d.description,
          imageUrl: d.imageUrl,
          applicationUserId: d.applicationUserId
        }}
          onSubmit={(data: any) => {
            collectionService.UpdateCollection(d.id, data);
          }}
        />
      )
    });
  }, []);

  return (
    <div>
      {collectionComponent}
    </div>
  )
};