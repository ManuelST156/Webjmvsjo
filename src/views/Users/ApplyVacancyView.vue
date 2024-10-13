<template>
  <Toast
    severity="custom"
    position="top-right"
    group="headless"
    @close="visible = false"
  >
    <template #container="{ message, closeCallback }">
      <section
        class="flex p-2 gap-3 w-full bg-black-alpha-90"
        style="border-radius: 10px"
      >
        <i class="pi pi-cloud-upload text-primary-500 text-2xl"></i>
        <div class="flex flex-column gap-3 w-full">
          <p class="m-0 font-semibold text-base text-white">
            {{ message.summary }}
          </p>
          <p class="m-0 text-base text-700">{{ message.detail }}</p>
          <div class="flex flex-column gap-2">
            <ProgressBar
              :value="progress"
              :showValue="false"
              :style="{ height: '4px' }"
            ></ProgressBar>
            <label class="text-right text-xs text-white"
              >{{ progress }}% Subido...</label
            >
          </div>
        </div>
        <button
          @click="closeCallback()"
          class="p-button p-button-text p-button-secondary ml-auto"
          style="
            font-size: 1.5rem;
            color: white;
            background: transparent;
            border: none;
          "
        >
          &times;
          <!-- símbolo de multiplicación como 'X' -->
        </button>
      </section>
    </template>
  </Toast>
  <main class="LoginRegister">
    <div
      id="containerRegister"
      class="card flex justify-content-center"
      ref="contentRef"
    >
      <h2 id="Tittle">
        ¡¡¡Forma Parte del Consejo y Aplica a una Vocalía!!! 😁
      </h2>

      <!--========================================================-->
      <!--Selección de Foto y Vacantes-->
      <!--========================================================-->

      <div class="firstGroup">
        <div class="pruebaImg">
          <img src="@/assets/Avatar1.png" id="imageUpload" />
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <MultiSelect
              :maxSelectedLabels="3"
              v-model="vacancy"
              id="vacancy"
              :options="vacancyList"
              optionLabel="nombreVocalia"
              optionValue="idVocalia"
              class="w-full md:w-32rem"
              required="true"
              :class="{ 'p-invalid': submitted && !vacancy }"
            />
            <label for="vacancy" :class="{ 'p-error': submitted && !vacancy }">
              {{
                submitted && !vacancy
                  ? "Vocalia es Requerido"
                  : "Seleccionar Vocalia"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="blockUpload">
          <Toast />

          <label class="labelFile" for="fileInput">Subir una foto</label>
          <input
            @change="onFileChange"
            type="file"
            id="fileInput"
            accept="image/*"
          />
        </div>

        <!--========================================================-->

        <!--========================================================-->
        <!--Datos Generales-->
        <!--========================================================-->

        <div class="fullLine">
          <h3>Datos Generales</h3>
          <Divider class="Divider" type="solid" />
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="names"
              v-model="vacancyRequest.nombresSolicitante"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.nombresSolicitante,
              }"
            />
            <label
              for="names"
              :class="{
                'p-error': submitted && !vacancyRequest.nombresSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.nombresSolicitante
                  ? "Nombres son requeridos"
                  : "Nombres"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="lastNames"
              v-model="vacancyRequest.apellidosSolicitante"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.apellidosSolicitante,
              }"
            />
            <label
              for="lastNames"
              :class="{
                'p-error': submitted && !vacancyRequest.apellidosSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.apellidosSolicitante
                  ? "Apellidos son requeridos"
                  : "Apellidos"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Calendar
              v-model="vacancyRequest.fechaNacimientoSolicitante"
              id="birthDate"
              class="inputsLogin"
              required="true"
              :class="{
                'p-invalid':
                  submitted && !vacancyRequest.fechaNacimientoSolicitante,
              }"
            />
            <label
              for="birthDate"
              :class="{
                'p-error':
                  submitted && !vacancyRequest.fechaNacimientoSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.fechaNacimientoSolicitante
                  ? "Fecha de Nac. es requerida"
                  : "Fecha de Nacimiento"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              type="number"
              class="inputsLogin"
              id="age"
              v-model="vacancyRequest.edadSolicitante"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.edadSolicitante,
              }"
            />
            <label
              for="age"
              :class="{
                'p-error': submitted && !vacancyRequest.edadSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.edadSolicitante
                  ? "Edad es requerido"
                  : "Edad"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="phone"
              v-model="vacancyRequest.celularSolicitante"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.celularSolicitante,
              }"
            />
            <label
              for="phone"
              :class="{
                'p-error': submitted && !vacancyRequest.celularSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.celularSolicitante
                  ? "Numero Celular es requerido"
                  : "Numero de Celular"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              type="email"
              id="email"
              v-model="vacancyRequest.correoSolicitante"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.correoSolicitante,
              }"
            />
            <label
              for="email"
              :class="{
                'p-error': submitted && !vacancyRequest.correoSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.correoSolicitante
                  ? "Correo Electronico es requerido"
                  : "Correo Electronico"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Dropdown
              v-model="vacancyRequest.estadoCivilSolicitante"
              :options="civilStatus"
              optionLabel="status"
              optionValue="value"
              placeholder="Estado Civil"
              class="w-full md:w-32rem"
            />

            <label
              for="address"
              :class="{
                'p-error': submitted && !vacancyRequest.estadoCivilSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.estadoCivilSolicitante
                  ? "Estado Civil es requerido"
                  : "Estado Civil"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Dropdown
              id="dropLogin"
              v-model="vacancyRequest.sexoSolicitante"
              :options="genders"
              optionLabel="gender"
              optionValue="value"
              placeholder="Sexo"
              class="w-full md:w-32rem"
            />

            <label
              for="address"
              :class="{
                'p-error': submitted && !vacancyRequest.sexoSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.sexoSolicitante
                  ? "Sexo del Postulante es requerida"
                  : "Sexo del Postulante"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="address"
              v-model="vacancyRequest.direccionSolicitante"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.direccionSolicitante,
              }"
            />
            <label
              for="address"
              :class="{
                'p-error': submitted && !vacancyRequest.direccionSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.direccionSolicitante
                  ? "Direccion es requerida"
                  : "Direccion de Residencia"
              }}
            </label>
          </FloatLabel>
        </div>

        <!--========================================================-->

        <!--========================================================-->
        <!--Sobre Mi-->
        <!--========================================================-->

        <div class="fullLine">
          <h3>Sobre Mi</h3>
          <Divider class="Divider" type="solid" />
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="quality"
              v-model="vacancyRequest.cualidades"
              class="textLogin"
              autoResize rows="5"
            />
            <label for="quality"
              >MENCIONE TRES (3) CUALIDADES QUE LO IDENTIFIQUEN</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="havedSkill"
              v-model="vacancyRequest.habilidadesPoseidas"
              class="textLogin"
              autoResize rows="5"
            />
            <label for="havedSkill"
              >MENCIONE TRES (3) HABILIDADES QUE POSEE</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="weaknesses"
              v-model="vacancyRequest.debilidades"
              class="textLogin"
              autoResize rows="5"
            />
            <label for="weaknesses"
              >MENCIONE TRES (3) DEBILIDADES QUE LO IDENTIFIQUEN</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="desiredSkill"
              v-model="vacancyRequest.habilidadesDeseadas"
              class="textLogin"
              autoResize rows="5"
            />
            <label for="desiredSkill"
              >MENCIONE TRES (3) HABILIDADES QUE LE GUSTARÍA ADQUIRIR</label
            >
          </FloatLabel>
        </div>

        <!--========================================================-->
        <!--Formacion Academica-->
        <!--========================================================-->

        <div class="fullLine">
          <h3>Formacion Academicos</h3>
          <Divider class="Divider" type="solid" />
        </div>

        <div class="fullLine" id="Table">
          <DataTable :value="allAcademic">
            <Column
              style="min-width: 12rem"
              field="titulo"
              header="Titulo"
            ></Column>
            <Column
              style="min-width: 12rem"
              field="institucion"
              header="Institución"
            ></Column>
            <Column
              style="min-width: 4rem"
              field="añoFinalizacion"
              header="Año Finalizacion"
            ></Column>
            <Column style="min-width: 4rem">
              <template #body="slotProps">
                <Button
                  outlined
                  rounded
                  id="tableButton"
                  class="mr-2"
                  @click="editAcademic(slotProps.data)"
                >
                  <div class="icon-wrapper">
                    <span class="material-symbols-outlined icon"
                      >edit_square</span
                    >
                  </div>
                </Button>

                <Button
                  outlined
                  rounded
                  severity="danger"
                  id="tableButton"
                  class="mr-2"
                  @click="deleteAcademic(slotProps.data)"
                >
                  <div class="icon-wrapper">
                    <span class="material-symbols-outlined icon">delete</span>
                  </div>
                </Button>
              </template>
            </Column>
          </DataTable>
        </div>

        <!--Dialog de Formación Academica -->

        <div class="fullLine">
          <Button
            class="buttonSend"
            label="Agregar Formacion Academica"
            @click="(visibleAcademicDialog = true), (academicBackground = {})"
          />
          <Dialog
            class="w-6"
            v-model:visible="visibleAcademicDialog"
            modal
            header="Formación Académica"
          >
            <div class="block">
              <FloatLabel class="FloatLabel">
                <InputText
                  maxlength="40"
                  class="inputsLogin"
                  id="collegeDegree"
                  v-model="academicBackground.titulo"
                  required="true"
                  :class="{
                    'p-invalid': submitted && !academicBackground.titulo,
                  }"
                />
                <label
                  for="collegeDegree"
                  :class="{
                    'p-error': submitted && !academicBackground.titulo,
                  }"
                >
                  {{
                    submitted && !academicBackground.titulo
                      ? "Titulo es Requerido"
                      : "Titulo"
                  }}
                </label>
              </FloatLabel>
            </div>

            <div class="block">
              <FloatLabel class="FloatLabel">
                <InputText
                  maxlength="40"
                  class="inputsLogin"
                  id="academicInstitution"
                  v-model="academicBackground.institucion"
                />
                <label for="academicInstitution">Institucion Academica</label>
              </FloatLabel>
            </div>

            <div class="block">
              <FloatLabel class="FloatLabel">
                <InputText
                  maxlength="10"
                  class="inputsLogin"
                  id="endYear"
                  v-model="academicBackground.añoFinalizacion"
                  required="true"
                  :class="{
                    'p-invalid':
                      submitted && !academicBackground.añoFinalizacion,
                  }"
                />

                <label
                  for="endYear"
                  :class="{
                    'p-error': submitted && !academicBackground.añoFinalizacion,
                  }"
                >
                  {{
                    submitted && !academicBackground.añoFinalizacion
                      ? "Año de Finalizacion es Requerido"
                      : "Año de Finalizacion"
                  }}
                </label>
              </FloatLabel>
            </div>

            <div class="flex justify-content-end gap-2">
              <Button
                class="buttonSend"
                type="button"
                label="Cancelar"
                @click="
                  (academicBackground = {}), (visibleAcademicDialog = false)
                "
              ></Button>
              <Button
                class="buttonSend"
                type="submit"
                label="Agregar"
                @click="saveAcademicBackground"
              ></Button>
            </div>
          </Dialog>
        </div>

        <!--========================================================-->

        <!--========================================================-->
        <!--Vida comunitaria-->
        <!--========================================================-->

        <div class="fullLine">
          <h3>Vida Comunitaria</h3>
          <Divider class="Divider" type="solid" />
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Dropdown
              v-model="vacancyRequest.idComunidad"
              @change="loadComunityData"
              id="comunity"
              :options="comunityList"
              optionLabel="nombreComunidad"
              optionValue="idComunidad"
              class="w-full md:w-32rem"
              required="true"
              :class="{ 'p-invalid': submitted && !vacancyRequest.idComunidad }"
            />
            <label
              for="comunity"
              :class="{ 'p-error': submitted && !vacancyRequest.idComunidad }"
            >
              {{
                submitted && !vacancyRequest.idComunidad
                  ? "Comunidad es Requerido"
                  : "Comunidad"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Dropdown
              v-model="vacancyRequest.idEtapaFormacion"
              id="formationStage"
              :options="formationStageList"
              optionLabel="nombreEtapa"
              optionValue="idEtapaFormacion"
              class="w-full md:w-32rem"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.idEtapaFormacion,
              }"
            />
            <label
              for="formationStage"
              :class="{
                'p-error': submitted && !vacancyRequest.idEtapaFormacion,
              }"
            >
              {{
                submitted && !vacancyRequest.idEtapaFormacion
                  ? "Etapa Formacion es Requerido"
                  : "Etapa Formacion"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="catechistName"
              v-model="catechistName"
              :readonly="true"
            />
            <label for="catechistName">Nombre del Catequista</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Dropdown
              id="comunityDay"
              v-model="vacancyRequest.diaComunidad"
              :options="comunityDays"
              optionLabel="day"
              optionValue="value"
              class="w-full md:w-32rem"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.diaComunidad,
              }"
            />
            <label
              for="comunityDay"
              :class="{ 'p-error': submitted && !vacancyRequest.diaComunidad }"
            >
              {{
                submitted && !vacancyRequest.idComunidad
                  ? "Dia de Formacion es Requerido"
                  : "Dia de Formacion"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Calendar
              v-model="vacancyRequest.fechaIniciacion"
              id="dateStart"
              class="inputsLogin"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.fechaIniciacion,
              }"
            />
            <label
              for="dateStart"
              :class="{
                'p-error': submitted && !vacancyRequest.fechaIniciacion,
              }"
            >
              {{
                submitted && !vacancyRequest.fechaIniciacion
                  ? "Fecha de Iniciacion es Requerido"
                  : "Fecha de Iniciacion"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              type="number"
              class="inputsLogin"
              id="durationComunity"
              v-model="vacancyRequest.duracionComunidad"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.duracionComunidad,
              }"
            />
            <label
              for="durationComunity"
              :class="{
                'p-error': submitted && !vacancyRequest.duracionComunidad,
              }"
            >
              {{
                submitted && !vacancyRequest.duracionComunidad
                  ? "Tiempo en la Comunidad es requerido"
                  : "Tiempo en la Comunidad"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <Checkbox
            id="promise"
            v-model="vacancyRequest.hizoPromesa"
            :binary="true"
          />
          <label for="promise" class="ml-2"> Hizo Promesa?</label>
        </div>

        <div class="block">
          <Checkbox
            id="consecration"
            v-model="vacancyRequest.hizoConsagracion"
            :binary="true"
          />
          <label for="consecration" class="ml-2"> Hizo Consagracion?</label>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Calendar
              v-model="vacancyRequest.fechaPromesa"
              id="promiseDate"
              class="inputsLogin"
              :disabled="!vacancyRequest.hizoPromesa"
            />
            <label for="promiseDate">Fecha de Promesa Mariana</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Calendar
              v-model="vacancyRequest.fechaConsagracion"
              id="consecrationDate"
              class="inputsLogin"
              :disabled="!vacancyRequest.hizoConsagracion"
            />
            <label for="consecrationDate">Fecha de Consagracion Mariana</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="promisePlace"
              v-model="vacancyRequest.lugarPromesa"
              :disabled="!vacancyRequest.hizoPromesa"
            />
            <label for="promisePlace">Lugar Promesa Mariana</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="consecrationPlace"
              v-model="vacancyRequest.lugarConsagracion"
              :disabled="!vacancyRequest.hizoConsagracion"
            />
            <label for="consecrationPlace">Lugar Consagracion Mariana</label>
          </FloatLabel>
        </div>

        <div class="block">
          <Checkbox
            id="accompaniment"
            v-model="vacancyRequest.recibeAcompañamiento"
            :binary="true"
          />
          <label for="accompaniment" class="ml-2">
            Recibe Acompañamiento?</label
          >
        </div>

        <!--========================================================-->

        <!--========================================================-->
        <!--Sacramentos-->
        <!--========================================================-->

        <div class="fullLine">
          <h3>Sacramentos</h3>
          <Divider class="Divider" type="solid" />
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <MultiSelect
              id="sacraments"
              v-model="vacancySacrament"
              :options="sacraments"
              optionLabel="sacraments"
              optionValue="value"
              class="w-full md:w-32rem"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancySacrament,
              }"
              :maxSelectedLabels="3"
            />
            <label
              for="sacraments"
              :class="{
                'p-error': submitted && !vacancySacrament,
              }"
            >
              {{
                submitted && !vacancySacrament
                  ? "Sacramentos son Requeridos"
                  : "Sacramentos Realizados"
              }}
            </label>
          </FloatLabel>
        </div>

        <!--========================================================-->

        <!--========================================================-->
        <!--Servicios Pastorales-->
        <!--========================================================-->
        <div class="fullLine">
          <h3>Servicios Pastorales</h3>

          <Divider class="Divider" type="solid" />
        </div>

        <div class="fullLine" id="Table">
          <DataTable :value="allServices">
            <Column
              style="min-width: 12rem"
              field="nombreServicio"
              header="Servicio Realizado"
            ></Column>
            <Column
              style="min-width: 12rem"
              field="lugarServicio"
              header="Lugar"
            ></Column>
            <Column
              style="min-width: 4rem"
              field="duracionServicio"
              header="Duracion"
            ></Column>
            <Column style="min-width: 4rem">
              <template #body="slotProps">
                <Button
                  outlined
                  rounded
                  id="tableButton"
                  class="mr-2"
                  @click="editService(slotProps.data)"
                >
                  <div class="icon-wrapper">
                    <span class="material-symbols-outlined icon"
                      >edit_square</span
                    >
                  </div>
                </Button>

                <Button
                  outlined
                  rounded
                  severity="danger"
                  id="tableButton"
                  class="mr-2"
                  @click="deleteService(slotProps.data)"
                >
                  <div class="icon-wrapper">
                    <span class="material-symbols-outlined icon">delete</span>
                  </div>
                </Button>
              </template>
            </Column>
          </DataTable>
        </div>

        <!--Dialog de Servicios Pastorales-->
        <div class="fullLine">
          <Button
            class="buttonSend"
            label="Agregar Servicios Pastorales"
            @click="(visibleServiceDialog = true), (pastoralService = {})"
          />
          <Dialog
            v-model:visible="visibleServiceDialog"
            modal
            header="Servicios Pastorales"
            class="w-6"
          >
            <div class="block">
              <FloatLabel class="FloatLabel">
                <InputText
                  maxlength="40"
                  class="inputsLogin"
                  id="serviceName"
                  v-model="pastoralService.nombreServicio"
                />
                <label for="serviceName">Nombre del Servicio</label>
              </FloatLabel>
            </div>

            <div class="block">
              <FloatLabel class="FloatLabel">
                <InputText
                  maxlength="40"
                  class="inputsLogin"
                  id="servicePlace"
                  v-model="pastoralService.lugarServicio"
                />
                <label for="servicePlace">Lugar del Servicio</label>
              </FloatLabel>
            </div>

            <div class="block">
              <FloatLabel class="FloatLabel">
                <InputText
                  maxlength="10"
                  class="inputsLogin"
                  id="serviceTime"
                  v-model="pastoralService.duracionServicio"
                />
                <label for="serviceTime">Duracion del Servicio</label>
              </FloatLabel>
            </div>

            <div class="flex justify-content-end gap-2">
              <Button
                class="buttonSend"
                type="button"
                label="Cancelar"
                @click="(visibleServiceDialog = false), (pastoralService = {})"
              ></Button>
              <Button
                class="buttonSend"
                type="button"
                label="Agregar"
                @click="savePastoralServices"
              ></Button>
            </div>
          </Dialog>
        </div>

        <!--========================================================-->

        <!--========================================================-->
        <!--Cuentanos de ti-->
        <!--========================================================-->

        <div class="fullLine">
          <h3>Cuentanos de ti!!!</h3>
          <Divider class="Divider" type="solid" />
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="trayectory"
              autoResize rows="5"
              v-model="vacancyRequest.trayectoriaSolicitante"
              class="textLogin"
            />
            <label for="trayectory"
              >DESCRIBA BREVEMENTE CÓMO HA SIDO SU TRAYECTORIA EN JMV</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="expectations"
              v-model="vacancyRequest.expectativasSolicitante"
              class="textLogin"
              autoResize rows="5"
            />
            <label for="expectations"
              >DESCRIBA SUS EXPECTATIVAS AL ASUMIR LA VOCALÍA A LA QUE SE
              POSTULA Y SU PLAN DE TRABAJO</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="reasonVacancy"
              v-model="vacancyRequest.razonPostulacion"
              class="textLogin"
              autoResize rows="5"
            />
            <label for="reasonVacancy"
              >¿POR QUÉ ELEGISTE POSTULARTE PARA ESTE SERVICIO DENTRO DE LA
              ASOCIACIÓN?</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="futureVision"
              v-model="vacancyRequest.visualizacionFutura"
              class="textLogin"
              autoResize rows="5"
            />
            <label for="futureVision"
              >¿CÓMO TE VISUALIZAS EN LOS PRÓXIMOS TRES AÑOS?</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="projects"
              v-model="vacancyRequest.proyectosDeseariaImpulsar"
              class="textLogin"
              autoResize rows="5"
            />
            <label for="projects"
              >TRES (3) PROYECTOS QUE DESEARÍA IMPULSAR DESDE ESTA VOCALÍA
              (CÓMO)</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="vacancyAlternative"
              v-model="vacancyRequest.VocaliaDeseadaAlternativa"
              class="textLogin"
              autoResize rows="5"
            />
            <label for="vacancyAlternative"
              >EN CASO DE NO SER ELECTO EN LA VOCALÍA DESEADA, ¿OPTARÍA POR OTRA
              VOCALIA EN EL CONSEJO DE CENTRO?, ¿CUÁL? Y ¿POR QUÉ?)</label
            >
          </FloatLabel>
        </div>


        <!--========================================================-->

        <!--========================================================-->
        <!-- final del div principal -->
        <!--========================================================-->
      </div>

      <!--========================================================-->
      <!--Boton para crear el registro-->
      <!--========================================================-->

      <div class="card flex justify-content-center">
        <Button
          class="buttonSend"
          label="Guardar Registro"
          @click="saveVacancy"
          type="submit"
          :loading="loading"
        />

      </div>

      <div class="card flex justify-content-center">
        <Button
          class="buttonSend"
          label="Descargar Copia"
          @click="downloadPDF"
          type="submit"
          :loading="loading"
        />

      </div>

    </div>
  </main>
</template>

<style lang="scss" scoped>
.buttonSend {
  margin: 5px 0;
  background-color: var(--darkblue);
  border: none;
  padding: 10px 20px; // Añadido para mejorar el diseño en pantallas pequeñas
  box-sizing: border-box; // Incluye padding y border en el ancho total
}

.buttonSend:hover {
  background-color: var(--lightcyan);
}

.buttonSend:active {
  background-color: var(--darkblue);
}

::v-deep(.p-datatable) {
  .p-datatable-table {
    border-collapse: collapse;
    margin: 10px 0;
  }

  .p-datatable-thead > tr > th,
  .p-datatable-tbody > tr > td {
    border-color: var(--darkblue);
    border-width: 1px;
  }
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.icon {
  font-size: 20px;
}

::v-deep(#tableButton.p-button) {
  padding: 10px;
  margin: 0 3px;
  width: 30px;
  height: 30px;
}

#imageUpload {
  width: 100%; // Cambiado a 100% para responsividad
  max-width: 230px; // Ancho máximo para evitar que se agrande demasiado en pantallas grandes
  height: 240px; // Ajustado para mantener la proporción
  background-color: lightgray;
  margin-bottom: 30px;
  border-radius: 10px;
}

.LoginRegister {
  background: linear-gradient(200deg, var(--rblight), var(--rblightblue));
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  box-sizing: border-box;
}

.fullLine {
  flex: 1 1 100%;
}

#containerRegister {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%; // Ajustado para adaptarse a diferentes tamaños de pantalla
  max-width: 800px; // Ancho máximo para pantallas grandes
  height: auto;
  box-sizing: border-box; // Incluye padding y border en el ancho total
  overflow: hidden; // Evita el desbordamiento del contenedor
  margin-left: 0; // Asegura que el contenedor se alinee con el contenido principal
}

#Tittle {
  margin-bottom: 20px;
  margin-top: 0;
}

.block {
  width: 100%;
  height: 60px;
  margin: 10px 0;
  flex: 1 1 calc(50% - 20px);
  min-width: 200px;
  box-sizing: border-box;
}

.blockUpload {
  width: 100%; // Cambiado a 100% para responsividad
  max-width: 300px; // Ancho máximo para pantallas grandes
  height: 60px;
  margin: 10px 0;
  min-width: 20px;
  box-sizing: border-box;
}

.pruebaImg {
  width: 100%;
  height: auto; // Ajustado para mantener la proporción
  margin: 10px 0;
  flex: 1 1 calc(50% - 20px);
  min-width: 200px;
  box-sizing: border-box;
}

.firstGroup {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}

.inputsLogin {
  height: 40px;
  margin-bottom: 4rem;
  width: 100%;
  box-sizing: border-box;
}

.textLogin {
  width: 100%;
  min-height: 5em; /* Altura mínima para el textarea */
  resize: none; /* Desactiva el redimensionamiento manual */
  box-sizing: border-box; /* Incluye padding en el tamaño */
  overflow: hidden; /* Evita barras de scroll */
}


.fullLineText {
  display: flex;
  flex-direction: column;
  width: 100%; /* Asegura que ocupe todo el ancho */
  padding: 10px;
  transition: height 0.2s ease; 
}

.linksLogin {
  margin: 10px;
}

.FloatLabel {
  height: 25px;
}

input[type="file"] {
  display: none;
}

.labelFile {
  background-color: var(--darkblue);
  height: 40px;
  margin-bottom: 4rem;
  width: 100%; // Cambiado a 100% para responsividad
  max-width: 300px; // Ancho máximo para pantallas grandes
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  box-sizing: border-box;
}

.labelFile:hover {
  background-color: var(--lightcyan);
}

.labelFile:active {
  background-color: var(--darkblue);
}

// Media Queries
@media (max-width: 768px) {
  #containerRegister {
    width: 95%;
    padding: 1rem;
    margin-left: 0; // Asegura que el formulario no quede oculto bajo el sidebar
  }

  .buttonSend {
    padding: 8px 16px;
  }

  .labelFile {
    font-size: 18px;
  }

  .icon {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  #containerRegister {
    padding: 0.5rem;
    margin-left: 0rem; // Asegura que el formulario no quede oculto bajo el sidebar
    width: 70%; // Ajustado para adaptarse a diferentes tamaños de pantalla
    align-items: normal;
    height: auto;
  }

  .buttonSend {
    padding: 6px 12px;
  }

  .labelFile {
    font-size: 16px;
  }

  .icon {
    font-size: 16px;
  }

  .pruebaImg {
    height: auto; // Ajustado para mantener la proporción en pantallas pequeñas
  }

  ::v-deep(.p-datatable) {
    .p-datatable-table {
      font-size: 12px; /* Ajusta el tamaño de la fuente de toda la tabla */
    }

    .p-datatable-thead > tr > th,
    .p-datatable-tbody > tr > td {
      padding: 6px; /* Ajusta el relleno de las celdas */
    }

    .p-datatable-thead > tr > th {
      font-size: 14px; /* Ajusta el tamaño de la fuente de los encabezados */
    }

    /* Ajusta el ancho de las columnas */
    .p-datatable-table colgroup col:nth-child(1) {
      width: 30%; /* Ancho de la primera columna */
    }

    .p-datatable-table colgroup col:nth-child(2) {
      width: 30%; /* Ancho de la segunda columna */
    }

    .p-datatable-table colgroup col:nth-child(3) {
      width: 40%; /* Ancho de la tercera columna */
    }
  }

  #Table {
    overflow: auto; /* Permite el desplazamiento horizontal si es necesario */
  }
}
</style>

<script setup>
//========================================================
//Imports de Modulos
//========================================================
import { ref, onMounted, h } from "vue";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";
import { createClient } from "@supabase/supabase-js";
import { uid } from "uid";
import { jwtDecode } from "jwt-decode";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
/* import { Tooltip } from 'primevue/tooltip'; */

//========================================================
//Variables de Supabase
//========================================================

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

//========================================================
//Variables de Toast
//========================================================

const toast = useToast();
const visible = ref(false);
const progress = ref(0);
const interval = ref();

//========================================================
//Variable de JWT para manejo de tokens
/* const jwt_decode = require('jwt-decode'); */
//========================================================

//========================================================
//Variables de estado
//========================================================

const submitted = ref(false);
const visibleAcademicDialog = ref(false);
const visibleServiceDialog = ref(false);
const loading = ref(false);
const isEditing = ref(false);
const router = useRouter();
const promiseState = ref(false);
const consecrationState = ref(false);
const texts= [''];

//========================================================
//Variables de datos
//========================================================

//Objetos
const vacancyRequest = ref({});
const academicBackground = ref({});
const pastoralService = ref({});

//Array
const allAcademic = ref([]);
const allServices = ref([]);
const vacancyList = ref([]);
const comunityList = ref([]);
const usersList = ref([]);
const formationStageList = ref([]);
const academicDeleted = ref([]);
const servicesDeleted = ref([]);

//Variables Primitivas
const catechistName = ref();
const formationStage = ref();
const fileUpload = ref(null); //Variable para la imagen
const isEditAcademic = ref(false);
const isEditService = ref(false);
const getRequestID = ref();
const vacancySacrament = ref();
const vacancy = ref();
const vacancyNames=ref("");

//Variable Array con Datos Predefinidos
const civilStatus = ref([
  { status: "Soltero/a", value: "Soltero/a" },
  { status: "Casado/a", value: "Casado/a" },
  { status: "Viudo/a", value: "Viudo/a" },
]);

const genders = ref([
  { gender: "Masculino", value: "Masculino" },
  { gender: "Femenino", value: "Femenino" },
]);

const comunityDays = ref([
  { day: "Sabado en la tarde", value: "Sabado en la tarde" },
  { day: "Sabado en la noche", value: "Sabado en la noche" },
  { day: "Domingo en la mañana", value: "Domingo en la mañana" },
  { day: "Domingo en la tarde", value: "Domingo en la tarde" },
  { day: "Domingo en la noche", value: "Domingo en la noche" },
  { day: "Lunes en la tarde", value: "Lunes en la tarde-noche" },
  { day: "Martes en la tarde", value: "Martes en la tarde-noche" },
  { day: "Miercoles en la tarde", value: "Miercoles en la tarde-noche" },
  { day: "Jueves en la tarde", value: "Jueves en la tarde-noche" },
  { day: "Viernes en la tarde", value: "Viernes en la tarde-noche" },
]);

const sacraments = ref([
  { sacraments: "Bautismo", value: "Bautismo" },
  { sacraments: "Confirmación", value: "Confirmación" },
  { sacraments: "Eucaristía", value: "Eucaristía" },
]);

//========================================================
//Mounted
//========================================================

onMounted(async () => {
  if (interval.value) {
    clearInterval(interval.value);
  }

  let vacancyGet = await supabase.from("Vocalias").select("*");

  let comunityGet = await supabase.from("datoscompletocomunidad").select("*");

  let formationStageGet = await supabase.from("EtapaFormacion").select("*");

  vacancyList.value = vacancyGet.data;
  comunityList.value = comunityGet.data;
  formationStageList.value = formationStageGet.data;
  console.log(formationStageList.value);

  if (localStorage.getItem("isEditing")) {
    getRequestID.value = localStorage.getItem("isEditing");

    const requestGet = await supabase
      .from("solicitudvocaliaconsulta")
      .select("*")
      .eq("idSolicitud", getRequestID.value);

    const requestServicesGet = await supabase
      .from("obtenerservicios")
      .select("*")
      .eq("idSolicitud", getRequestID.value);

    const requestAcademicGet = await supabase
      .from("obtenerformacionacademica")
      .select("*")
      .eq("idSolicitud", getRequestID.value);

    console.log(requestGet.data);
    const VacancyValues = requestGet.data.map((record) => record.idVocalia);
    console.log(requestGet.data);

    vacancyRequest.value = requestGet.data[0];
    console.log(vacancyRequest.value);
    vacancySacrament.value =
      vacancyRequest.value.sacramentosSolicitante.split(",");

    vacancy.value = VacancyValues;
    console.log(vacancy.value);

    requestAcademicGet.data.forEach((element) => {
      const { idSolicitud, ...newObject } = element;

      allAcademic.value.push(newObject);
    });

    requestServicesGet.data.forEach((element) => {
      const { idSolicitud, ...newObject } = element;
      allServices.value.push(newObject);
    });

    const comunityUser = comunityList.value.find(
      (Comunidad) => Comunidad.idComunidad == vacancyRequest.value.idComunidad
    );
    catechistName.value = comunityUser.nombrecatequista;

    document.getElementById("imageUpload").src = vacancyRequest.value.imagenURL;
    isEditing.value = !!localStorage.getItem("isEditing");
    localStorage.removeItem("isEditing");

    vacancy.value.forEach(element => {
      console.log(element);
      const Select = vacancyList.value.find(el => el.idVocalia === element);

      console.log(Select);
      if (Select) {
        vacancyNames.value += Select.nombreVocalia + ' , ';  
      }
    });

   
      vacancyNames.value = vacancyNames.value.slice(0, -2);  
    
    console.log(vacancyNames.value);
  }
});

//========================================================
//Methods
//========================================================

//Metodo para Guardar Solicitudes
const saveVacancy = async () => {
  console.log(vacancyRequest.value);
  try {
    loading.value = true;
    submitted.value = true;

    //Si Encontramos imagen la sube a un bucket y luego obtiene su url
    if (fileUpload.value != null) {
      const Upload = fileUpload.value;

      if (Upload.files.length > 0) {
        const imagen = Upload.files[0];
        var nombreImagen =
          vacancyRequest.value.nombresSolicitante +
          "-" +
          "requestImage-" +
          uid(16).toString();

        const subirStorage = await supabase.storage
          .from("imageVacancy")
          .upload(nombreImagen, imagen);

        const urlDescargar = supabase.storage
          .from("imageVacancy")
          .getPublicUrl(nombreImagen);

        vacancyRequest.value.imagenURL = urlDescargar.data.publicUrl;
        vacancyRequest.value.codigoImagen = nombreImagen;
      }
    }

    console.log(vacancySacrament.value);
    vacancyRequest.value.sacramentosSolicitante =
      vacancySacrament.value.join(",");

    console.log(vacancyRequest.value);

    //Agregamos los datos de la solicitud a la tabla
    const { idVocalia, ...newObject } = vacancyRequest.value;

    const { error, data } = await supabase
      .from("Solicitudes")
      .upsert(newObject)
      .select();

    console.log(data, error);

    const requestID = data[0].idSolicitud;
    console.log(requestID);

    const { errorDelete, dataDelete } = await supabase
      .from("SolicitudesVocalia")
      .delete()
      .eq("idSolicitud", requestID);

    //Añadir varias vocalias
    vacancy.value.forEach(async (element) => {
      console.log(requestID);

      const vacancyBridge = {
        idSolicitud: requestID,
        idVocalia: element,
      };

      console.log(vacancyBridge);

      const { error, data } = await supabase
        .from("SolicitudesVocalia")
        .upsert(vacancyBridge)
        .select();
      console.log(data, error, vacancyBridge);
    });

    //Agregamos los datos de Formacion a su tabla en la DB
    if (allAcademic.value.length != 0) {
      allAcademic.value.forEach(async (element) => {
        if (Number.isInteger(element.idFormacionAcademica)) {
          if (academicDeleted.value.length != 0) {
            academicDeleted.value.forEach(async (element) => {
              const { data: deleteDataAcademicRequest } = await supabase
                .from("FormacionAcademicaSolicitud")
                .delete()
                .eq("idFormacionAcademica", element.idFormacionAcademica);

              const { data: deleteDataAcademic } = await supabase
                .from("FormacionAcademica")
                .delete()
                .eq("idFormacionAcademica", element.idFormacionAcademica);
            });
          }

          const { error, data } = await supabase
            .from("FormacionAcademica")
            .upsert(element)
            .select();
        } else {
          const { idFormacionAcademica, ...newObject } = element;
          const { error, data } = await supabase
            .from("FormacionAcademica")
            .upsert(newObject)
            .select();

          const bridgeTable = {
            idSolicitud: requestID,
            idFormacionAcademica: data[0].idFormacionAcademica,
          };

          const uploadAcademicBackgroud = await supabase
            .from("FormacionAcademicaSolicitud")
            .upsert(bridgeTable)
            .select();
        }
      });
    }
    //Agregamos los datos de Servicios a su tabla en la DB
    if (allServices.value.length != 0) {
      allServices.value.forEach(async (element) => {
        if (Number.isInteger(element.idServicio)) {
          if (servicesDeleted.value.length != 0) {
            servicesDeleted.value.forEach(async (element) => {
              const { data: deleteDataServicesRequest } = await supabase
                .from("ServiciosSolicitud")
                .delete()
                .eq("idServicio", element.idServicio);

              const { data: deleteDataServices } = await supabase
                .from("Servicios")
                .delete()
                .eq("idServicio", element.idServicio);
            });
          }

          const { error, data } = await supabase
            .from("Servicios")
            .upsert(element)
            .select();
        } else {
          const { idServicio, ...newObject } = element;
          console.log(newObject);
          const { error, data } = await supabase
            .from("Servicios")
            .upsert(newObject)
            .select();

          const bridgeTable = {
            idSolicitud: requestID,
            idServicio: data[0].idServicio,
          };

          const uploadPastoralServices = await supabase
            .from("ServiciosSolicitud")
            .upsert(bridgeTable)
            .select();
        }
      });
    }

    //Sirve para guardar los datos del usuario y la solicitud
    if (!isEditing.value) {
      const { data: listAuthUsers } = await supabase
        .from("Usuarios")
        .select("idUsuario")
        .eq("idAuth", decodeToken());

      const userRequestData = {
        idUsuario: listAuthUsers[0].idUsuario,
        idSolicitud: requestID,
      };

      const uploadUserRequest = await supabase
        .from("UsuarioSolicitud")
        .upsert(userRequestData)
        .select();
        

      // Mostrar el toast con barra de progreso para la creación de la solicitud
      show("Registro Creado", "Guardando Solicitud");


    } else {

      const pdf= await exportPDF();

        var namePDF=`Solicitud de ${vacancyRequest.value.nombresSolicitante} ${vacancyRequest.value.apellidosSolicitante}.pdf`;

        const { data: deleteData, error: deleteError } = await supabase
          .storage
          .from('filePDF') 
          .remove(namePDF);

        console.log(deleteData);
        const pdfBlob = pdf.output('blob');
        console.log(pdfBlob); 

         const { data: uploadData, error: uploadError } = await supabase
          .storage
          .from('filePDF') 
          .upload(namePDF, pdfBlob);

        console.log(uploadData,uploadError);


      // Mostrar el toast con barra de progreso para la actualización de la solicitud
      show("Registro Actualizado", "Guardando Solicitud");
      
    }
    /* aqui */

    

    /* setTimeout(() => {
      loading.value = false;
      router.push({ path: "/vacantes" }).then(() => {
        window.location.reload();
      });
    }, 3000); */
  } catch (error) {
    console.log(error);
    toast.add({
      severity: "error",
      summary: "TTienes Datos Vacio en el Registro",
      detail: "Datos no Agregados Correctamente: " + error,
      life: 3000,
    });

    loading.value = false;
  }
};

//Metodo para decodificar token
const decodeToken = () => {
  try {
    const token = localStorage.getItem("tokenJMV");
    if (!token) {
      throw new Error("No token found in localStorage");
    }

    const decodedToken = jwtDecode(token);
    const userID = decodedToken.sub;

    return userID;
  } catch (error) {
    return null;
  }
};

//Metodo para cargar datos Comunidades en el Dropdown al ser seleccionada
const loadComunityData = () => {
  const getDataComunity = comunityList.value.find(
    (c) => c.idComunidad === vacancyRequest.value.idComunidad
  );

  formationStage.value = getDataComunity.nombreEtapa;
  catechistName.value = getDataComunity.nombrecatequista;
};

//Metodo para mostrar la imagen, desde que es cargada
const onFileChange = (event) => {
  fileUpload.value = event.target;
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const img = document.getElementById("imageUpload");
    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
  toast.add({
    severity: "info",
    summary: "Foto Cargada",
    detail: "Mostrando Previsualizacion de su Foto",
    life: 3000,
  });
};

//Funcion para Guardar Formacion Academica de Forma Temporal
const saveAcademicBackground = () => {
  if (
    academicBackground.value &&
    Object.keys(academicBackground.value).length > 0
  ) {
    if (academicBackground.value.idFormacionAcademica) {
      allAcademic.value[
        findIndexById(academicBackground.value.idFormacionAcademica)
      ] = academicBackground.value;
      toast.add({
        severity: "success",
        summary: "Registro Actualizado",
        detail: "Formacion Academica Acatualizada",
        life: 3000,
      });
    } else {
      academicBackground.value.idFormacionAcademica = createId();
      allAcademic.value.push(academicBackground.value);

      toast.add({
        severity: "success",
        summary: "Registro Agregado",
        detail: "Formacion Academica Agregada",
        life: 3000,
      });
    }
    visibleAcademicDialog.value = false;
    academicBackground.value = {};
  } else {
    toast.add({
      severity: "error",
      summary: "Registro Vacio",
      detail: "Datos no Agregados Correctamente",
      life: 3000,
    });
  }
};

//Funcion para Guarda los Servicios Pastorales de Forma Temporal
const savePastoralServices = () => {
  if (pastoralService.value && Object.keys(pastoralService.value).length > 0) {
    if (pastoralService.value.idServicio) {
      allServices.value[findIndexById(pastoralService.value.idServicio)] =
        pastoralService.value;
      toast.add({
        severity: "success",
        summary: "Registro Actualizado",
        detail: "Servicio Pastoral Acatualizada",
        life: 3000,
      });
    } else {
      pastoralService.value.idServicio = createId();
      allServices.value.push(pastoralService.value);

      toast.add({
        severity: "success",
        summary: "Registro Agregado",
        detail: "Servicio Pastoral Agregada",
        life: 3000,
      });
    }
    visibleServiceDialog.value = false;
    pastoralService.value = {};
  } else {
    toast.add({
      severity: "error",
      summary: "Registro Vacio",
      detail: "No se Agrega a la tabla",
      life: 3000,
    });
  }
};

//Funcion para Editar Datos de Formacion Academica
const editAcademic = (prod) => {
  academicBackground.value = { ...prod };
  isEditAcademic.value = true;
  visibleAcademicDialog.value = true;
};

//Funcion para Borrar Datos de Formacion Academica
const deleteAcademic = (prod) => {
  academicBackground.value = prod;

  const toDelete = allAcademic.value.filter(
    (val) =>
      val.idFormacionAcademica == academicBackground.value.idFormacionAcademica
  );

  academicDeleted.value.push(toDelete[0]);

  allAcademic.value = allAcademic.value.filter(
    (val) =>
      val.idFormacionAcademica !== academicBackground.value.idFormacionAcademica
  );

  academicBackground.value = {};

  toast.add({
    severity: "success",
    summary: "Registro Eliminado",
    detail: "Formacion academica Eliminada",
    life: 3000,
  });
};

//Funcion para Editar Datos de Servicios Pastorales
const editService = (prod) => {
  pastoralService.value = { ...prod };
  isEditService.value = true;
  visibleServiceDialog.value = true;
};

//Funcion para Borrar Datos de Servicios Pastorales
const deleteService = (prod) => {
  pastoralService.value = prod;

  const toDelete = allServices.value.filter(
    (val) => val.idServicio == pastoralService.value.idServicio
  );
  servicesDeleted.value.push(toDelete[0]);

  allServices.value = allServices.value.filter(
    (val) => val.idServicio !== pastoralService.value.idServicio
  );
  pastoralService.value = {};
  toast.add({
    severity: "success",
    summary: "Registro Eliminado",
    detail: "Formacion academica Eliminada",
    life: 3000,
  });
};

//Funcion para Encontrar el ID para Editar
const findIndexById = (id) => {
  if (isEditAcademic.value) {
    let index = -1;
    for (let i = 0; i < allAcademic.value.length; i++) {
      if (allAcademic.value[i].idFormacionAcademica === id) {
        index = i;
        break;
      }
    }

    return index;
  } else {
    let index = -1;
    for (let i = 0; i < allServices.value.length; i++) {
      if (allServices.value[i].idServicio === id) {
        index = i;
        break;
      }
    }

    return index;
  }
};

//Funcion para Crear ID para los Objetos de las Tablas
const createId = () => {
  let id = "";
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
};

const show = (summary, detail) => {
  if (!visible.value) {
    toast.add({
      severity: "custom",
      summary: summary,
      detail: detail,
      group: "headless",
      life: 3000,
    });
    visible.value = true;
    progress.value = 0;

    if (interval.value) {
      clearInterval(interval.value);
    }

    interval.value = setInterval(() => {
      if (progress.value <= 100) {
        progress.value = progress.value + 30;
      }

      if (progress.value >= 100) {
        progress.value = 100;
        clearInterval(interval.value);
      }
    }, 500);
  }
};

// Función para capturar el contenido y generar el PDF
const exportPDF = async () => {
  const doc = new jsPDF();

  // Título principal
  const titulo = "Ficha de Postulacion " + vacancyRequest.value.nombresSolicitante + " " + vacancyRequest.value.apellidosSolicitante;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(titulo, 14, 10);

  // Subtítulo
  const vacancyMessage = "Vocalias a la que se Postula: " + vacancyNames.value;
  doc.setFontSize(12);
  doc.text(vacancyMessage, 14, 20);

  // Imagen
  const { data, error } = await supabase
    .storage
    .from('imageVacancy') // Nombre del bucket
    .download(vacancyRequest.value.codigoImagen);
  
  const imgData = await convertBlobToBase64(data);
  doc.setDrawColor(0); // Color de borde negro
  doc.setLineWidth(1);
  doc.rect(14, 30, 50, 50); // Dibujar un borde alrededor de la imagen
  doc.addImage(imgData, 'JPEG', 14, 30, 50, 50);

  let startY = 90;

  // Datos personales
  const tablePersonalData = [
    ["Datos Personales", ""],
    ["Nombres Solicitante", vacancyRequest.value.nombresSolicitante],
    ["Apellidos Solicitante", vacancyRequest.value.apellidosSolicitante],
    ["Edad", vacancyRequest.value.edadSolicitante],
    ["Numero de Celular", vacancyRequest.value.celularSolicitante],
    ["Correo Electronico", vacancyRequest.value.correoSolicitante],
    ["Estado Civil", vacancyRequest.value.estadoCivilSolicitante],
    ["Sexo Postulante", vacancyRequest.value.sexoSolicitante],
    ["Direccion de Residencia", vacancyRequest.value.direccionSolicitante],
    ["MENCIONE TRES (3) CUALIDADES QUE LO IDENTIFIQUEN", vacancyRequest.value.cualidades],
    ["MENCIONE TRES (3) HABILIDADES QUE POSEE", vacancyRequest.value.habilidadesPoseidas],
    ["MENCIONE TRES (3) DEBILIDADES QUE LO IDENTIFIQUEN", vacancyRequest.value.debilidades],
    ["MENCIONE TRES (3) HABILIDADES QUE LE GUSTARÍA ADQUIRIR", vacancyRequest.value.habilidadesDeseadas],
  ];

  // Formato de tabla personalizado
  doc.autoTable({
    head: [tablePersonalData[0]],
    body: tablePersonalData.slice(1),
    startY: startY,
    styles: { fillColor: [240, 240, 240], fontSize: 10 }, // Color de fondo y tamaño de fuente
    headStyles: { fillColor: [41, 128, 185], textColor: 255 }, // Estilo de la cabecera
    alternateRowStyles: { fillColor: [245, 245, 245] }, // Estilo de filas alternas
    tableLineWidth: 0.1,
    tableLineColor: [0, 0, 0] // Líneas de la tabla
  });

  startY = doc.autoTable.previous.finalY + 10; // Espacio entre tablas

  // Antecedentes académicos
  const tableAcademicBackground = [
    ["Titulo o Grado", "Institucion", "Año"],
  ];

  allAcademic.value.forEach((element) => {
    tableAcademicBackground.push([element.titulo, element.institucion, element.añoFinalizacion]);
  });

  doc.autoTable({
    head: [tableAcademicBackground[0]],
    body: tableAcademicBackground.slice(1),
    startY: startY,
    styles: { fillColor: [240, 240, 240], fontSize: 10 },
    headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    alternateRowStyles: { fillColor: [245, 245, 245] },
    tableLineWidth: 0.1,
    tableLineColor: [0, 0, 0] // Líneas de la tabla
  });

  startY = doc.autoTable.previous.finalY + 10;

  // Comunidad
  const communityNameSelect = comunityList.value.find(comunity => comunity.idComunidad == vacancyRequest.value.idComunidad).nombreComunidad;
  const formationStageSelect = formationStageList.value.find(stage => stage.idEtapaFormacion == vacancyRequest.value.idEtapaFormacion).nombreEtapa;
  const promiseSelect = vacancyRequest.value.hizoPromesa ? "SI" : "NO";
  const consecrationSelect = vacancyRequest.value.hizoConsagracion ? "SI" : "NO";

  const tableCommunity = [
    ["Datos de la Vida Comunitaria o de Formacion", ""],
    ["Comunidad", communityNameSelect],
    ["Etapa de Formacion", formationStageSelect],
    ["Nombre Catequista", catechistName.value],
    ["Dia de Formacion", vacancyRequest.value.diaComunidad],
    ["Fecha de Iniciacion", vacancyRequest.value.fechaIniciacion],
    ["Tiempo en la Comunidad", vacancyRequest.value.duracionComunidad],
    ["Tiene Acompañamiento Espiritual?", vacancyRequest.value.recibeAcompañamiento],
    ["Hizo la Promesa Mariana?", promiseSelect],
    ["Hizo la Consagracion Mariana?", consecrationSelect],
  ];

  doc.autoTable({
    head: [tableCommunity[0]],
    body: tableCommunity.slice(1),
    startY: startY,
    styles: { fillColor: [240, 240, 240], fontSize: 10 },
    headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    alternateRowStyles: { fillColor: [245, 245, 245] },
    tableLineWidth: 0.1,
    tableLineColor: [0, 0, 0] // Líneas de la tabla
  });

  startY = doc.autoTable.previous.finalY + 10;

  // Servicios realizados
  const tableServices = [
    ["Servicio Realizado", "Lugar", "Duracion"],
  ];

  allServices.value.forEach((element) => {
    tableServices.push([element.nombreServicio, element.lugarServicio, element.duracionServicio]);
  });

  doc.autoTable({
    head: [tableServices[0]],
    body: tableServices.slice(1),
    startY: startY,
    styles: { fillColor: [240, 240, 240], fontSize: 10 },
    headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    alternateRowStyles: { fillColor: [245, 245, 245] },
    tableLineWidth: 0.1,
    tableLineColor: [0, 0, 0] // Líneas de la tabla
  });

  startY = doc.autoTable.previous.finalY + 10;

  // Acerca de la Postulacion
  const tableAboutVacancy = [
    ["Acerca de la Postulacion", ""],
    ["DESCRIBA BREVEMENTE CÓMO HA SIDO SU TRAYECTORIA EN JMV", vacancyRequest.value.trayectoriaSolicitante],
    ["DESCRIBA SUS EXPECTATIVAS AL ASUMIR LA VOCALÍA A LA QUE SE POSTULA Y SU PLAN DE TRABAJO", vacancyRequest.value.expectativasSolicitante],
    ["¿POR QUÉ ELEGISTE POSTULARTE PARA ESTE SERVICIO DENTRO DE LA ASOCIACIÓN?", vacancyRequest.value.razonPostulacion],
    ["¿CÓMO TE VISUALIZAS EN LOS PRÓXIMOS TRES AÑOS?", vacancyRequest.value.visualizacionFutura],
    ["TRES (3) PROYECTOS QUE DESEARÍA IMPULSAR DESDE ESTA VOCALÍA", vacancyRequest.value.proyectosDeseariaImpulsar],
    ["EN CASO DE NO SER ELECTO EN LA VOCALÍA DESEADA, ¿OPTARÍA POR OTRA VOCALIA EN EL CONSEJO DECENTRO?, ¿CUÁL? Y ¿POR QUÉ?", vacancyRequest.value.VocaliaDeseadaAlternativa],
  ];

  doc.autoTable({
    head: [tableAboutVacancy[0]],
    body: tableAboutVacancy.slice(1),
    startY: startY,
    styles: { fillColor: [240, 240, 240], fontSize: 10 },
    headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    alternateRowStyles: { fillColor: [245, 245, 245] },
    tableLineWidth: 0.1,
    tableLineColor: [0, 0, 0] // Líneas de la tabla
  });

  return doc;
};


const convertBlobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);  // Convertido a Base64
    reader.onerror = reject;
    reader.readAsDataURL(blob);  // Inicia la conversión del Blob
  });
};


const downloadPDF=async ()=>{
  var namePDF=`Solicitud de ${vacancyRequest.value.nombresSolicitante} ${vacancyRequest.value.apellidosSolicitante}.pdf`;
  console.log(namePDF);
  const pdf= await exportPDF();
  pdf.save(namePDF);
}

/* const uploadPDF=async ()=>{

  const pdf= await exportPDF();

  var namePDF=`Solicitud de ${vacancyRequest.value.nombresSolicitante} ${vacancyRequest.value.apellidosSolicitante}.pdf`;

  const pdfBlob = pdf.output('blob');

  const { data: uploadData, error: uploadError } = await supabase
    .storage
    .from('filePDF') 
    .upload(namePDF, pdfBlob);
} */

</script>
