import { render } from 'mjml-react';

import DefaultTemplate from '../../../../components/Templates/DefaultTemplate';

export default async function generateEmailWithDefaultTemplate(req, res) {
  const { id } = req.query;

  try {
    const EmailContent = require(`../../../emails/${id}.js`).default;

    const { html, errors } = render(
      <DefaultTemplate>
        <EmailContent />
      </DefaultTemplate>,
      {
        validationLevel: 'soft',
      }
    );

    if (errors.length) {
      return res.status(500).json({
        errors,
      });
    }

    return res.send(html);
  } catch (e) {
    return res.status(500).json({
      error: `Cannot find email with name ${id}.js`,
      jsError: e.message,
    });
  }
}
