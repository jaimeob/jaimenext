// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { NextApiRequest, nextAPiResponse } from "next/types";
const { google } = require("googleapis");
import NextCors from "nextjs-cors";

export default async function handler(req, res) {


  if (req.method === "POST" || req.method === "OPTIONS") {
    try {
      console.log(req.body.objectUser);
      console.log(req.method, "METHOD ..................");
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
      });

      const client = await auth.getClient();

      const googleSheets = google.sheets({ version: "v4", auth: client });

      const spreadsheetId = "1gPWl1WXR0VJyCorbOyhD0NhOOHIdW-tmcjJ3oHeasEM";

      await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId: spreadsheetId,
        range: "Respuestas de formulario 1",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [
            [
              req.body.objectUser.MarcaTemporal,
              req.body.objectUser.NombreEmpresa,
              req.body.objectUser.Contacto,
              req.body.objectUser.Email,
              req.body.objectUser.Telefono,
              req.body.objectUser.RazonSocial,
              req.body.objectUser.RFC,
              req.body.objectUser.Quevende,
              req.body.objectUser.URL,
              req.body.objectUser.PagosCreditoCoppel,
              req.body.objectUser.Sucursales,
              req.body.objectUser.VentasMensuales,
              req.body.objectUser.SituacionFiscal,
              req.body.objectUser.ResponsableComercial,
              req.body.objectUser.Estatus,
            ],
          ],
        },
      });

      return res.status(200).json({ sucess: "Guardado con exito" });

    } catch (error) {
      return res.status(400).json({ error: "Error al guardar " });

    }

  }
}
