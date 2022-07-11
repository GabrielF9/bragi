import { render } from 'mjml-react';

export default async function generateEmailWithCustomTemplate(req, res) {
  const { id, templateFile } = req.query;

  try {
    const EmailTemplate =
      require(`../../../../components/Templates/${templateFile}.js`).default;
    const EmailContent = require(`../../../emails/${id}.js`).default;

    const { html, errors } = render(
      <EmailTemplate>
        <EmailContent />
      </EmailTemplate>,
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
    let error = `Cannot find email with name ${id}.js`;

    if (e.message.includes(templateFile)) {
      error = `Cannot find email template with name ${templateFile}.js`;
    }

    return res.status(500).json({
      error,
      jsError: e.message,
    });
  }
}
