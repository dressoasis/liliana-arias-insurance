import { ComponentShowcase } from "../components/ComponentShowcase";
import { TextField } from "../../../components/ui/Form/TextField";
import { CheckboxField } from "../../../components/ui/Form/CheckboxField";
import { RadioField } from "../../../components/ui/Form/RadioField";
import { SelectField } from "../../../components/ui/Form/SelectField";
import { TextareaField } from "../../../components/ui/Form/TextareaField";

export const FormsView = () => {
  return (
    <div className="space-y-12">
      <ComponentShowcase 
        title="Text Inputs" 
        description="Campos de texto estándar. Soporta labels, hints y mensajes de error accesibles (aria-invalid)."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          <TextField 
            label="Nombre Completo" 
            placeholder="Ej. Juan Pérez" 
          />
          <TextField 
            label="Correo Electrónico" 
            type="email" 
            placeholder="juan@ejemplo.com"
            hint="No compartiremos tu correo con nadie."
          />
          <TextField 
            label="Teléfono" 
            placeholder="(555) 000-0000"
            error="Número de teléfono inválido."
          />
          <TextField 
            label="Campo Deshabilitado" 
            disabled 
            value="No editable"
          />
        </div>
      </ComponentShowcase>

      <ComponentShowcase 
        title="Select & Textarea" 
        description="Componentes de selección múltiple y texto largo."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          <SelectField 
            label="Tipo de Seguro"
            options={[
              { value: "", label: "Selecciona una opción" },
              { value: "life", label: "Seguro de Vida" },
              { value: "health", label: "Seguro de Salud" },
              { value: "medicare", label: "Medicare" }
            ]}
          />
          <TextareaField 
            label="Mensaje Adicional"
            placeholder="¿Cómo podemos ayudarte?"
            rows={4}
          />
        </div>
      </ComponentShowcase>

      <ComponentShowcase 
        title="Radio & Checkbox" 
        description="Controles booleanos personalizados."
      >
        <div className="flex flex-col gap-6 max-w-xl">
          <div className="space-y-4 p-6 border border-border rounded-xl">
            <CheckboxField 
              label="Acepto los términos y condiciones" 
            />
            <CheckboxField 
              label="Suscribirme al Newsletter" 
              hint="Recibe noticias sobre seguros mensualmente."
            />
          </div>

          <div className="space-y-4 p-6 border border-border rounded-xl">
            <RadioField 
              name="contactMethod"
              value="email"
              label="Contactar por Email" 
            />
            <RadioField 
              name="contactMethod"
              value="phone"
              label="Contactar por Teléfono" 
            />
          </div>
        </div>
      </ComponentShowcase>
    </div>
  );
};
